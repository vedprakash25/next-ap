"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface ProfileType {
  username: string;
  email: string;
  isAdmin: boolean;
  isVerified: boolean;
}

export default function Profile() {
  const [data, setData] = useState<ProfileType | null>();
  const router = useRouter();

  const handleClick = async () => {
    await axios.get("/api/users/logout");
    router.push("/");
  };

  const getUserDetails = async () => {
    try {
      const req: any = await axios.get("/api/users/me");
      setData(req.data.data);
      return req.data.data;
    } catch (error: any) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <div className="p-2 mt-4 flex flex-col justify-center">
      <h1 className="text-2xl text-center">Profile</h1>
      <div className="mx-auto w-fit p-5">
        <h1>Name: {data?.username}</h1>
        <h1>Email: {data?.email}</h1>
        <h1>Admin: {data?.isAdmin ? "Admin" : "Not Admin"}</h1>
        <h1>Verified: {data?.isVerified ? "Verified" : "Not Verified"}</h1>
      </div>
      <button
        onClick={handleClick}
        className="text-white border rounded mt-4 p-2 px-4 mx-auto "
      >
        Logout
      </button>
    </div>
  );
}
