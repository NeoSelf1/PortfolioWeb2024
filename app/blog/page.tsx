import NavBar from "@/components/NavBar";
import { PostCard } from "@/components/postcard";

export const metadata = {
  title: "Blog",
  description: "블로그 글입니다.",
};

const getData = async () => {
  const res = await fetch(`http://localhost:3000/api/blog`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error("something went wrong");
  }

  return res.json();
};

const BlogPage = async () => {
  const posts = await getData();

  return (
    <div className="container mx-auto py-8">
      <NavBar />
      <h1 className="text-3xl font-bold m-4 ">블로그s 글 목록</h1>
      <div className="flex-wrap flex gap-4 w-full">
        {posts.map((post: any, id: number) => (
          <PostCard key={id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
