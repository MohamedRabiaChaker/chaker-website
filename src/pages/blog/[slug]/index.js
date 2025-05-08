"use client";
import RenderMarkdown from "@/components/RenderMarkdown";
import LandingLayout from "@/layouts/LandingLayout";
import Header from "@/sections/Header";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function BlogPostPage() {
  const parameters = useParams();
  const slug = parameters?.slug;

  const { data: post, error } = useSWR(
    slug ? `/api/posts/${slug}` : null,
    fetcher,
  );

  useEffect(() => {
    fetch(`/api/views/${slug}`, { method: "POST" });
  }, [slug]);

  if (error) return <div>Failed to load</div>;
  if (!post) return <div>Loading...</div>;
  return (
    <LandingLayout>
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="mb-6">
          <div className="rounded-box overflow-hidden">
            <Image
              src={post.coverUrl}
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
          <p className="text-lg text-gray-500">{post.description}</p>
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <div key={tag} className="badge badge-outline badge-secondary">
              {tag}
            </div>
          ))}
        </div>
        <RenderMarkdown>{post.content}</RenderMarkdown>
      </div>
    </LandingLayout>
  );
}
