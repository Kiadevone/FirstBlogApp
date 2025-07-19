"use client";
import React from "react";
import { usePosts } from "@/app/context/PostsContext";

const MonthlyViews = () => {
  const posts = usePosts();

  const views = posts.reduce((acc, currentPost) => acc + currentPost.view, 0);

  return (
    <div className="shadow-sm w-1/4 flex flex-col py-8 px-8 gap-y-2">
      <div className="flex items-center justify-between">
        <div className="px-2 py-2">
          <img className="w-8 h-8" src="\iconView.png" alt="" />
        </div>
        <div className="flex gap-1 items-center">
          <span>
            <img className="w-5 h-5" src="\iconProgressStat.png" alt="" />
          </span>
          <p className="text-md text-green-600">+3 this month</p>
        </div>
      </div>
      <div className=" flex flex-col">
        <p className="text-xl font-semibold">{views}</p>
        <p className="text-md ">views</p>
      </div>
    </div>
  );
};

export default MonthlyViews;
