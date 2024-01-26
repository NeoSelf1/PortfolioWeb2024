import { Post } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: any) {
  const { slug } = params;

  try {
    connectToDb();
    const post = await Post.findOne({ slug });
    return NextResponse.json(post);
  } catch (e) {
    console.log(e);
    throw new Error("Failed to fetch post!");
  }
}

export async function DELETE(request: Request, { params }: any) {
  const { slug } = params;

  try {
    connectToDb();
    const post = await Post.deleteOne({ slug });
    return NextResponse.json("Post Deleted");
  } catch (e) {
    console.log(e);
    throw new Error("Failed to delete post!");
  }
}
