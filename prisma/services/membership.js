import { InvitationStatus } from '@prisma/client';
import prisma from '@/prisma/index';

export const getMember = async (id) =>
  await prisma.member.findFirst({
    select: { teamRole: true },
    where: { id },
  });


export const remove = async (id) =>
  await prisma.member.update({
    data: { deletedAt: new Date() },
    where: { id },
  });

export const toggleRole = async (id, teamRole) =>
  await prisma.member.update({
    data: { teamRole },
    where: { id },
  });

export const updateStatus = async (id, status) =>
  await prisma.member.update({
    data: { status },
    where: { id },
  });
