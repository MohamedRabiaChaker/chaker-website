import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function POST(req, res) {
  const { slug } = req.query;
  try {
    await prisma.post.update({
      where: { slug },
      data: { views: { increment: 1 } },
    });

    return res.status(200).json({ message: "View recorded" });
  } catch (error) {
    return res
      .status(500)
      .json({ error: `error while incrementing view ${error}` });
  }
}
