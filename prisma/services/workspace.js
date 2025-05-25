import { InvitationStatus, TeamRole } from '@prisma/client';
import slugify from 'slugify';

import {
  html as createHtml,
  text as createText,
} from '@/config/email-templates/workspace-create';
import {
  html as inviteHtml,
  text as inviteText,
} from '@/config/email-templates/invitation';
import prisma from '@/prisma/index';

export const countWorkspaces = async (slug) =>
  await prisma.workspace.count({
    where: { slug: { startsWith: slug } },
  });

export const createWorkspace = async (creatorId, email, name, slug) => {
  const count = await countWorkspaces(slug);

  if (count > 0) {
    slug = `${slug}-${count}`;
  }

  const workspace = await prisma.workspace.create({
    data: {
      creatorId,
      members: {
        create: {
          email,
          inviter: email,
          status: InvitationStatus.ACCEPTED,
          teamRole: TeamRole.OWNER,
        },
      },
      name,
      slug,
    },
  });

};

export const deleteWorkspace = async (id, email, slug) => {
  const workspace = await getOwnWorkspace(id, email, slug);

  if (workspace) {
    await prisma.workspace.update({
      data: { deletedAt: new Date() },
      where: { id: workspace.id },
    });
    return slug;
  } else {
    throw new Error('Unable to find workspace');
  }
};

export const getInvitation = async (inviteCode) =>
  await prisma.workspace.findFirst({
    select: {
      id: true,
      name: true,
      workspaceCode: true,
      slug: true,
    },
    where: {
      deletedAt: null,
      inviteCode,
    },
  });

export const getOwnWorkspace = async (id, email, slug) =>
  await prisma.workspace.findFirst({
    select: {
      id: true,
      inviteCode: true,
      name: true,
    },
    where: {
      OR: [
        { id },
        {
          members: {
            some: {
              deletedAt: null,
              teamRole: TeamRole.OWNER,
              email,
            },
          },
        },
      ],
      AND: {
        deletedAt: null,
        slug,
      },
    },
  });

export const getSiteWorkspace = async (slug, customDomain) =>
  await prisma.workspace.findFirst({
    select: {
      id: true,
      name: true,
      slug: true,
      domains: { select: { name: true } },
    },
    where: {
      OR: [
        { slug },
        customDomain
          ? {
              domains: {
                some: {
                  name: slug,
                  deletedAt: null,
                },
              },
            }
          : undefined,
      ],
      AND: { deletedAt: null },
    },
  });

export const getWorkspace = async (id, email, slug) =>
  await prisma.workspace.findFirst({
    select: {
      creatorId: true,
      name: true,
      inviteCode: true,
      slug: true,
      workspaceCode: true,
      creator: { select: { email: true } },
      members: {
        select: {
          email: true,
          teamRole: true,
        },
      },
    },
    where: {
      OR: [
        { id },
        {
          members: {
            some: {
              email,
              deletedAt: null,
            },
          },
        },
      ],
      AND: {
        deletedAt: null,
        slug,
      },
    },
  });


export const inviteUsers = async (id, email, members, slug) => {
  const workspace = await getOwnWorkspace(id, email, slug);
  const inviter = email;

  if (workspace) {
    const membersList = members.map(({ email, role }) => ({
      email,
      inviter,
      teamRole: role,
    }));
    const data = members.map(({ email }) => ({
      createdAt: null,
      email,
    }));
    await Promise.all([
      prisma.user.createMany({
        data,
        skipDuplicates: true,
      }),
      prisma.workspace.update({
        data: {
          members: {
            createMany: {
              data: membersList,
              skipDuplicates: true,
            },
          },
        },
        where: { id: workspace.id },
      })
    ]);
    return membersList;
  } else {
    throw new Error('Unable to find workspace');
  }
};

export const isWorkspaceCreator = (id, creatorId) => id === creatorId;

export const isWorkspaceOwner = (email, workspace) => {
  let isTeamOwner = false;
  const member = workspace.members.find(
    (member) => member.email === email && member.teamRole === TeamRole.OWNER
  );

  if (member) {
    isTeamOwner = true;
  }

  return isTeamOwner;
};

export const joinWorkspace = async (workspaceCode, email) => {
  const workspace = await prisma.workspace.findFirst({
    select: {
      creatorId: true,
      id: true,
    },
    where: {
      deletedAt: null,
      workspaceCode,
    },
  });

  if (workspace) {
    await prisma.member.upsert({
      create: {
        workspaceId: workspace.id,
        email,
        inviter: workspace.creatorId,
        status: InvitationStatus.ACCEPTED,
      },
      update: {},
      where: { email },
    });
    return new Date();
  } else {
    throw new Error('Unable to find workspace');
  }
};

export const updateName = async (id, email, name, slug) => {
  const workspace = await getOwnWorkspace(id, email, slug);

  if (workspace) {
    await prisma.workspace.update({
      data: { name },
      where: { id: workspace.id },
    });
    return name;
  } else {
    throw new Error('Unable to find workspace');
  }
};

export const updateSlug = async (id, email, newSlug, pathSlug) => {
  let slug = slugify(newSlug.toLowerCase());
  const count = await countWorkspaces(slug);

  if (count > 0) {
    slug = `${slug}-${count}`;
  }

  const workspace = await getOwnWorkspace(id, email, pathSlug);

  if (workspace) {
    await prisma.workspace.update({
      data: { slug },
      where: { id: workspace.id },
    });
    return slug;
  } else {
    throw new Error('Unable to find workspace');
  }
};
