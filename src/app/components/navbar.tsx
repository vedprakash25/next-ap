"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

export default function Navbar() {
  const [isMenu, setMenu] = useState(false);
  const pathname = usePathname();
  return (
    <div className="relative">
      <header className="lg:flex hidden font-light justify-center w-fit mx-auto rounded-full mt-5 px-16 gap-5 py-3 border-2 border-gray-500">
        <Link
          href="/"
          className={pathname === "/" ? "text-white " : "text-gray-400"}
        >
          Home
        </Link>
        <Link
          className={pathname === "/login" ? "text-white " : "text-gray-400"}
          href="/login"
        >
          Login
        </Link>
        <Link
          className={pathname === "/signup" ? "text-white " : "text-gray-400"}
          href="/signup"
        >
          Signup
        </Link>
        <Link
          className={
            pathname === "/user/profile" ? "text-white " : "text-gray-400"
          }
          href="/user/profile"
        >
          Profile
        </Link>
      </header>
      <button
        onClick={() => (isMenu ? setMenu(false) : setMenu(true))}
        className="lg:hidden flex justify-center ml-auto mr-6 flex-col gap-2 h-8 mt-2"
      >
        <span
          className={`${
            isMenu ? "rotate-45" : "-rotate-45"
          } w-6 h-[2px] bg-white`}
        />
        <span
          className={`${
            isMenu ? "-rotate-45" : "-rotate-45"
          } w-6 h-[2px] bg-white`}
        />
      </button>
      <header
        className={`flex flex-col lg:hidden justify-center mt-8 gap-5 absolute top-0 right-0 text- bg-gradient-to-b via-slate-700 from-black to-black ${
          isMenu ? "h-fit p-5" : "h-0 px-0"
        } w-full rounded-xl overflow-hidden`}
        onClick={() => (isMenu ? setMenu(false) : setMenu(true))}
      >
        <Link
          className={pathname === "/" ? "text-white " : "text-gray-400"}
          href="/"
        >
          Home
        </Link>
        <Link
          className={pathname === "/login" ? "text-white " : "text-gray-400"}
          href="/login"
        >
          Login
        </Link>
        <Link
          className={pathname === "/signup" ? "text-white " : "text-gray-400"}
          href="/signup"
        >
          Signup
        </Link>
        <Link
          className={pathname === "/user" ? "text-white " : "text-gray-400"}
          href="/user"
        >
          Profile
        </Link>
        <Link href="/user/id">UserProfile</Link>
      </header>
    </div>
  );
}
