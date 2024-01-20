import { PostCard } from "@/components/postcard";
import { getPosts } from "@/lib/data";

export const metadata = {
  title: "Blog",
  description: "블로그 글입니다.",
};

const BlogPage = async () => {
  const posts = await getPosts();
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold m-4 ">블로그 글 목록</h1>
      <div className="flex-wrap flex gap-4 w-full">
        {posts.map((post, id) => (
          <PostCard key={id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
