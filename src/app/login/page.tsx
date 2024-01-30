"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onLogin = () => {
    console.log(user);
  };
  return (
    <div className="p-4 h-[70vh] flex items-center">
      <form className="p-5 flex flex-col gap-5 mx-auto max-w-sm rounded-md">
        <h1 className="text-center">Login</h1>
        <input className="p-2 rounded-md" id="email" placeholder="Email" />
        <input
          className="p-2 rounded-md"
          id="password"
          placeholder="password"
        />

        <button className="p-2 border border-white rounded-md">Login</button>
        <Link href="/signup" className="text-center">
          Visit Login
        </Link>
      </form>
    </div>
  );
}
