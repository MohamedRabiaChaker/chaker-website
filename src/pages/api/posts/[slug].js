import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { slug } = req.query;

  if (req.method === "GET") {
    const post = await prisma.post.findUnique({
      where: { slug: String(slug) },
    });
    if (post) {
      res.json(post);
    } else {
      res.status(404).json({ error: "Post not found" });
    }
  } else {
    res.status(405).end();
  }
}
