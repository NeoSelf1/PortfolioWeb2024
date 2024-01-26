"use server";

import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectToDb } from "./utils";
import bcrypt from "bcryptjs";
import { signIn } from "./auth";

export const addPost = async (formData: any) => {
  const { title, desc, slug, userId } = Object.fromEntries(formData);
  try {
    connectToDb();
    const newPost = new Post({ title, desc, slug, userId });
    await newPost.save();
    revalidatePath("/blog");
    console.log("saved to db");
  } catch (error) {
    console.log("Something went wrong", error);
  }
};

export const deletePost = async (formData: any) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();
    await Post.findByIdAndDelete(id);
    revalidatePath("/blog");
    console.log("deleted from db");
  } catch (error) {
    console.log("Something went wrong", error);
  }
};

export const register = async (prevState: any, formData: any) => {
  const { username, email, password, img, passwordRepeat } =
    Object.fromEntries(formData);
  if (password !== passwordRepeat) {
    return { error: "Passwords do not match!" };
  }
  try {
    connectToDb();
    const user = await User.findOne({ username });
    if (user) {
      return { error: "Username already exists" };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    });
    await newUser.save();
    console.log("saved to db");
    return { success: true };
  } catch (e) {
    console.log(e);
    return { error: "Something went wrong!" };
  }
};
export const handleGithubLogin = async () => {
  await signIn("github");
};

export const login = async (prevState: any, formData: any) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (e: any) {
    console.log(e.message);
    if (e.message.includes("CredentialsSignin")) {
      return { error: "Invalid username or password" };
    }
    throw e;
  }
};
