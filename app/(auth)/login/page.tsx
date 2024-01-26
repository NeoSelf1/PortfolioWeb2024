// import { handleGitHubLogin } from "@/lib/actions";
import LoginForm from "@/components/loginForm";
import { handleGithubLogin } from "@/lib/actions";
import React from "react";

const LoginPage = async () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[500px] bg-gray-800 p-[50px] flex flex-col text-center gap-[30px] rounded-md">
        <form action={handleGithubLogin}>
          <button className="w-full p-[20px] bg-white text-black font-bold rounded-md">
            Login with Github
          </button>
        </form>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
