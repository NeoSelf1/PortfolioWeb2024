import { auth, signIn } from "@/lib/auth";
import Link from "next/link";
import React from "react";
import { signOut } from "next-auth/react";

const NavBar = async () => {
  const session = await auth();

  return (
    <>
      {session?.user ? (
        <form action={signOut}>
          <button className="bg-gray-200 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow">
            Logout
          </button>
        </form>
      ) : (
        <></>
        // <form action={signIn}>
        //   <button className="bg-gray-200 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow">
        //     Login
        //   </button>
        // </form>
      )}
    </>
  );
};

export default NavBar;
