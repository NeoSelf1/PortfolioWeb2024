"use client";
import { register } from "@/lib/actions";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";

const RegisterForm = () => {
  const [state, formAction] = useFormState(register, undefined);
  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);

  return (
    <form
      className="flex flex-col text-black text-center gap-[30px]"
      action={formAction}
    >
      <input
        className="p-[20px] border-none"
        type="text"
        placeholder="username"
        name="username"
      />
      <input
        className="p-[20px] border-none"
        type="text"
        placeholder="email"
        name="email"
      />
      <input
        className="p-[20px] border-none"
        type="password"
        placeholder="password"
        name="password"
      />
      <input
        className="p-[20px] border-none"
        type="password"
        placeholder="password again"
        name="passwordRepeat"
      />
      <button>Register</button>
      {state?.error}
      <Link href="/login">
        Have an account? <b>Login</b>
      </Link>
    </form>
  );
};

export default RegisterForm;
