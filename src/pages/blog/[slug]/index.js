"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function BlogPostPage() {
  const parameters = useParams();
  const slug = parameters?.slug;

  const { data: post, error } = useSWR(
    slug ? `/api/posts/${slug}` : null,
    fetcher,
  );

  if (error) return <div>Failed to load</div>;
  if (!post) return <div>Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-6">
        <div className="rounded-box overflow-hidden">
          <Image
            src="/blog/testImage.png"
            alt="Banner"
            width={1200}
            height={600}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </div>

      <div className="mb-4">
        <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
        <p className="text-lg text-gray-500">
          this is a dummy description 7atta yafta7 rabbi
        </p>
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <div key={tag} className="badge badge-outline badge-secondary">
            {tag}
          </div>
        ))}
      </div>

      <div className="prose prose-lg max-w-none">{post.content}</div>
    </div>
  );
}
