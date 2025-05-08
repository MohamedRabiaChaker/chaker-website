"use client";
import useSWR from "swr";
import { useState } from "react";
import { useRouter } from "next/router";
import LandingLayout from "@/layouts/LandingLayout";
import Header from "@/sections/Header";
import BlogElementCard from "@/components/BlogElementCard";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function BlogPage() {
  const { data: posts, error } = useSWR("/api/posts", fetcher);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const navigateToPost = (slug) => {
    router.push("/blog/" + slug);
  };

  if (error) return <div>Failed to load</div>;
  if (!posts) return <div>Loading...</div>;

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const isOlderThan15Days = (dateString) => {
    const inputDate = new Date(dateString);
    const today = new Date();
    const timeDiff = today.getTime() - inputDate.getTime();

    const fifteenDays = 15 * 24 * 60 * 60 * 1000;

    return timeDiff > fifteenDays;
  };

  return (
    <LandingLayout>
      <Header />

      <div className="flex items-center justify-center px-10 pt-20 pb-10 mx-auto space-y-5 w-full md:w-3/4">
        <input
          type="text"
          placeholder="Type here"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input bg-zinc-400 text-gray-200 placeholder-gray-200"
        />
      </div>
      <div className="flex items-center justify-between px-10 pb-10 mx-auto space-y-5 w-full md:w-3/4">
        {filteredPosts.map((element) => (
          <BlogElementCard
            key={element.id}
            title={element.title}
            shortDescription={element.description}
            img={element.coverUrl}
            tags={element.tags}
            isNew={!isOlderThan15Days(element.createdAt)}
            onClick={() => navigateToPost(element.slug)}
          />
        ))}
      </div>
    </LandingLayout>
  );
}
