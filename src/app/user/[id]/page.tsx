"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ProfileType {
  username: string;
  email: string;
  isAdmin: boolean;
  isVerified: boolean;
}

export default function Profile({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<ProfileType | null>();
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = async () => {
    await axios.get("/api/users/logout");
    router.push("/");
  };

  const getUserDetails = async () => {
    try {
      const req: any = await axios.get("/api/users/me");
      setData(req.data.data);
      console.log(data);
      return req.data.data;
    } catch (error: any) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getUserDetails();
    console.log(data);
  }, []);

  const Profile = (data: any) => {
    return (
      <>
        <h1 className="text-2xl">Profile</h1>
        <h1>Name: {data?.username}</h1>
        <h1>Email: {data?.email}</h1>
        <h1>Admin: {data?.isAdmin ? "Admin" : "Not Admin"}</h1>
        <h1>Verified: {data?.isVerified ? "Verified" : "Not Verified"}</h1>
        <button
          onClick={handleClick}
          className="text-white border rounded mt-4 p-2 px-4 mx-auto "
        >
          Logout
        </button>
      </>
    );
  };
  const Blogs = (data: any) => {
    return (
      <>
        <h1 className="text-2xl">Blogs</h1>
      </>
    );
  };
  const CaseStudies = (data: any) => {
    return (
      <>
        <h1 className="text-2xl">Case Studies</h1>
      </>
    );
  };
  const News = (data: any) => {
    return (
      <>
        <h1 className="text-2xl">News</h1>
      </>
    );
  };
  const Analytics = (data: any) => {
    return (
      <>
        <h1 className="text-2xl">Analytics</h1>
      </>
    );
  };

  console.log(pathname);

  const panels = [
    {
      path: "/user/profile",
      component: <Profile data={data} />,
    },
    {
      path: "/user/blogs",
      component: <Blogs data={data} />,
    },
    {
      path: "/user/case-studies",
      component: <CaseStudies data={data} />,
    },
    {
      path: "/user/news",
      component: <News data={data} />,
    },
    {
      path: "/user/analytics",
      component: <Analytics data={data} />,
    },
  ];
  return (
    <div className="p-2 mt-4 flex justify-center max-w-screen-lg mx-auto">
      <div className=" flex-1 flex flex-col gap-4 max-w-xs pr-5">
        <Link href="/user/profile" className="text-left border p-2">
          Profile
        </Link>
        <Link href="/user/blogs" className="text-left border p-2">
          Blogs
        </Link>
        <Link href="/user/case-studies" className="text-left border p-2">
          CaseStudies
        </Link>
        <Link href="/user/news" className="text-left border p-2">
          News
        </Link>
        <Link href="/user/analytics" className="text-left border p-2">
          Analytics
        </Link>
      </div>
      <div className="mx-auto w-fit p-5 flex-1 border">
        {panels.map((item) => {
          return (
            <div>
              {pathname === item.path ? <div>{item.component}</div> : ""}
            </div>
          );
        })}
      </div>
    </div>
  );
}
