"use client";

import { login } from "@/lib/actions";
import { useFormState } from "react-dom";
import Link from "next/link";

const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);

  return (
    <form
      className="flex flex-col text-black text-center gap-[30px]"
      action={formAction}
    >
      <input type="text" placeholder="username" name="username" />
      <input type="password" placeholder="password" name="password" />
      <button className="p-[20px] font-bold rounded-md">Login</button>
      {state?.error}
      <Link href="/register">
        {"Don't have an account?"} <b>Register</b>
      </Link>
    </form>
  );
};

export default LoginForm;
