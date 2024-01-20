import React from "react";
import Image from "next/image";
import Link from "next/link";

export const PostCard = ({ post }: any) => {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="transition bg-gray-100/5 hover:bg-gray-100/20 w-[26%] min-w-[320px] border border-black/5 rounded-lg"
    >
      <div className="p-2 w-full">
        {post.img && (
          <div className="w-full h-[320px] relative">
            <Image
              src={post.img}
              alt=""
              fill
              quality={95}
              className="rounded-lg object-cover w-full h-64"
            />
          </div>
        )}
      </div>
      <div className="p-4">
        <h1 className="text-lg">{post.title}</h1>
        <div className="font-regular text-gray-500 mb-4">{post.desc}</div>
        {/* <span className="font-thin text-gray-100/30">{date}</span> */}
      </div>
    </Link>
  );
};
