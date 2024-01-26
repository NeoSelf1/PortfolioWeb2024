import { register } from "@/lib/actions";
import React from "react";

const RegisterPage = () => {
  return (
    <div>
      <form className="text-black" action={register}>
        <input type="text" placeholder="username" name="username" />
        <input type="text" placeholder="email" name="email" />
        <input type="password" placeholder="password" name="password" />
        <input
          type="password"
          placeholder="password again"
          name="passwordRepeat"
        />
        <button>Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
