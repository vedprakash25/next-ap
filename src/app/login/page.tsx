"use client";
import React, { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import toast from "react-hot-toast";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const [loading, setLoading] = useState(false);

  const onLogin = async (e: FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post("/api/users/login", user);
      console.log("server response", res.data);
      router.push("/profile");
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }

    console.log(user);
  };

  useEffect(() => {
    if (user.email.length > 1 && user.password.length >= 6) {
      setButtonDisabled(false);
    }
  }, [user]);
  return (
    <div className="p-4 h-[70vh] flex items-center">
      <form
        onSubmit={onLogin}
        className="p-5 flex flex-col gap-5 mx-auto max-w-sm rounded-md"
      >
        <h1 className="text-center">{loading ? "Processing..." : "Login"}</h1>
        <input
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          className="p-2 rounded-md text-black"
          id="email"
          placeholder="Email"
        />
        <input
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          className="p-2 rounded-md text-black"
          id="password"
          placeholder="password"
        />
        <button
          type="submit"
          disabled={buttonDisabled}
          className="p-2 border border-white rounded-md disabled:opacity-40"
        >
          {buttonDisabled ? "No Login" : "Login"}
        </button>
        <Link href="/signup" className="text-center">
          Visit Signup
        </Link>
      </form>
    </div>
  );
}
