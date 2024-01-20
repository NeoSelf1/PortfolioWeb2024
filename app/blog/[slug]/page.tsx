import Image from "next/image";
import { Suspense } from "react";
import { getPost } from "@/lib/data";
import PostUser from "@/components/postUser";

//먼저 slug로부터 post 데이터를 가져와야하기 때문에, const metadata를 바로 정의할 수 없다. 대신 함수로 이를 가져올 수 있다.
export const generateMetadata = async ({ params }: any) => {
  const { slug } = params;
  const post: any = await getPost(slug);
  return {
    title: post.title,
    description: post.desc,
  };
};

const SinglePostPage = async ({ params }: any) => {
  const { slug } = params;
  const post: any = await getPost(slug);
  //   console.log(post);
  return (
    <div className="w-full flex justify-center">
      <div className="min-w-[320px] w-3/4 h-[100vh] gap-16 flex flex-col">
        {post.img && (
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
              <PostUser userId={post.userId} />
            </Suspense>
          )}
          {/* <span className="text-white/50">Published</span> */}
          {/* <span className="text-sm text-white">
              {post.createdAt.toString().slice(4, 16)}
            </span> */}
        </div>
        <div className="text-white/80 text-md px-4">{post.desc}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
