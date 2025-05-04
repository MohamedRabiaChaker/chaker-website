"use client";

import { useParams } from "next/navigation";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function BlogPostPage() {
  const { slug } = useParams();
  const { data: post, error } = useSWR(
    slug ? `/api/posts/${slug}` : null,
    fetcher,
  );

  if (error) return <div>Failed to load</div>;
  if (!post) return <div>Loading...</div>;

  return (
    <article className="prose">
      <h1>{post.title}</h1>
      <p className="text-gray-500">
        {new Date(post.createdAt).toLocaleDateString()}
      </p>
      <div>{post.content}</div>
    </article>
  );
}
