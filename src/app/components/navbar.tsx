import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <header className=" flex gap-5 py-3">
      <Link href="/">Home</Link>
      <Link href="/login">Login</Link>
      <Link href="/signup">Signup</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/profile/id">UserProfile</Link>
    </header>
  );
}
