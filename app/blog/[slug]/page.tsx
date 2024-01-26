import Image from "next/image";
import { Suspense } from "react";
import PostUser from "@/components/postUser";

//먼저 slug로부터 post 데이터를 가져와야하기 때문에, const metadata를 바로 정의할 수 없다. 대신 함수로 이를 가져올 수 있다.
const getData = async (slug: string) => {
  console.log(slug);
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`, {
    next: { revalidate: 3200 },
  });
  if (!res.ok) {
    throw new Error("Something went wrong calling single page");
  }
  return res.json();
};

const SinglePostPage = async ({ params }: any) => {
  const { slug } = params;

  const post: any = await getData(slug);

  return (
    <div className="w-full flex justify-center">
      <div className="min-w-[320px] w-3/4 h-[100vh] gap-16 flex flex-col">
        {post?.img && (
          <div className="w-full h-[240px] relative">
            <Image src={post.img} alt="" fill className="object-cover" />
          </div>
        )}
        <h1 className="font-bold text-6xl text-white text-center">
          {post.title}
        </h1>
        <div className="self-end">
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              {/* <PostUser userId={post.userId} /> */}
            </Suspense>
          )}
        </div>
        <div className="text-white/80 text-md px-4">{post.desc}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
