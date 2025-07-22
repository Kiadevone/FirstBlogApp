"use client";
import React from "react";
import PostCard from "./PostCard";
import { usePosts } from "@/app/context/PostsContext";

const AllPostMain = () => {
  const posts = usePosts();

  return (
    <div className="flex flex-col gap-y-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <input type="checkbox" defaultChecked className="checkbox" />
          <p className="text-lg text-neutral-500">Select All</p>
        </div>

        <button className="flex items-center justify-center gap-x-4 px-4 py-2 text-neutral-600 hover:text-slate-800 hover:bg-blue-500  rounded-md cursor-pointer">
          <img className="w-6 h-6" src="\iconRefresh.png" alt="refresh" />
          <span className="text-xl font-semibold">Refresh</span>
        </button>
      </div>
      <div className="grid grid-cols-3 justify-items-center gap-4">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default AllPostMain;
