"use client";
import React, { FormEvent, SyntheticEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";
import axios from "axios";
import { NextFetchEvent } from "next/server";

export default function Signup() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const router = useRouter();

  const [buttonDisbaled, setButtonDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  async function onSignUp(e: FormEvent) {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post("/api/users/signup", user);
      console.log("data", res.data);
      alert("user created");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message, "Error message, Signup");
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 5 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="p-4 h-[70vh] flex items-center">
      <form
        action="submit"
        onSubmit={onSignUp}
        className="p-5 flex flex-col gap-5 mx-auto max-w-sm rounded-md "
      >
        <h1 className="text-center">{loading ? "Processing.." : "Signup"}</h1>
        <input
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          className="p-2 text-black rounded-md"
          id="name"
          placeholder="Username"
        />
        <input
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          className="p-2 text-black rounded-md"
          id="email"
          placeholder="Email"
        />
        <input
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          className="p-2 text-black rounded-md"
          id="password"
          placeholder="password"
        />

        <button
          disabled={buttonDisbaled}
          type="submit"
          className="p-2 border border-white rounded-md disabled:opacity-50"
        >
          {buttonDisbaled ? "No singup" : "Signup"}
        </button>
        <Link href="/login" className="text-center">
          Visit Login
        </Link>
      </form>
    </div>
  );
}
