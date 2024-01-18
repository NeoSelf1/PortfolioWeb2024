import Link from "next/link";
import React from "react";

const Blog = () => {
  // 블로그 데이터 배열
  const blogPosts = [
    {
      id: 1,
      title: "첫 번째 블로그 글",
      tags: ["태그1", "태그2"],
      date: "2022-01-01",
    },
    {
      id: 2,
      title: "두 번째 블로그 글",
      tags: ["태그3", "태그4"],
      date: "2022-02-01",
    },
    // 추가적인 블로그 데이터
  ];
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">블로그 글 목록</h1>
      <ul className="space-y-4">
        {blogPosts.map((post) => (
          <li key={post.id} className="border p-4 rounded-lg">
            <Link className="text-xl font-semibold" href={`/blog/${post.id}`}>
              {post.title}
            </Link>
            <div className="flex space-x-2 mt-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-200 text-gray-800 py-1 px-2 rounded-lg text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-gray-500 mt-2">작성일: {post.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
