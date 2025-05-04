import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "GET") {
    const posts = await prisma.post.findMany({
      orderBy: { createdAt: "desc" },
    });
    res.json(posts);
  } else if (req.method === "POST") {
    const { title, slug, content, tags } = req.body;

    try {
      const post = await prisma.post.create({
        data: {
          title,
          slug,
          content,
          tags,
        },
      });

      res.status(201).json(post);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error creating post", error: error });
    }
  } else {
    res.status(405).end();
  }
}
