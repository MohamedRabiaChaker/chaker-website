import BorderedCard from "@/components/BorderedCard";
import useSWR from "swr";
import { useRouter } from "next/router";

const fetcher = (url) => fetch(url).then((res) => res.json());

const BlogSection = () => {
  const { data: highlights, error } = useSWR(
    "/api/posts?orderBy=views",
    fetcher,
  );
  const router = useRouter();
  const navigateToPost = (slug) => {
    router.push("/blog/" + slug);
  };

  if (error) return <div>Failed to load</div>;
  if (!highlights) return <div>Loading...</div>;

  return (
    <div className="w-full py-10">
      <div className="relative flex flex-col px-5 mx-auto space-y-5 md:w-3/4">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-bold text-gray-200 text-center">
            <span className="block">Blog Highlight</span>
          </h2>
        </div>
        <div className="flex justify-center gap-10 py-10 ">
          {highlights.map((element) => (
            <BorderedCard
              key={element.id}
              subtitle={element.description}
              title={element.title}
              cover={element.coverUrl}
              onClick={() => {
                navigateToPost(element.slug);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
