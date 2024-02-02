"use client";

import axios from "axios";

export default function Profile() {
  const handleClick = async () => {
    await axios.get("/api/users/logout");

    console.log("logout");
  };
  return (
    <div className="p-2">
      <h1>Profile</h1>

      <button
        onClick={handleClick}
        className="text-white border rounded mt-4 p-2 px-4 "
      >
        Logout
      </button>
    </div>
  );
}
