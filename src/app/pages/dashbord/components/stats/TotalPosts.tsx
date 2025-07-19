"use client";
import React from "react";
import { usePosts } from "@/app/context/PostsContext";
import { filterPost } from "../../filterPost";

const TotalPosts = () => {
  const posts = usePosts();

  return (
    <div className="shadow-sm w-1/4 flex flex-col py-8 px-8 gap-y-2">
      <div className="flex items-center justify-between">
        <div className="bg-sky-200/60 px-2 py-2 rounded-lg">
          <svg
            className="w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 48 48"
          >
            <polygon
              fill="#3dd9eb"
              points="39,44 9,44 9,4 39,4 39,12.649"
            ></polygon>
            <rect width="18" height="4" x="15" y="16" fill="#00b3d7"></rect>
            <rect width="18" height="4" x="15" y="32" fill="#00b3d7"></rect>
            <rect width="18" height="4" x="15" y="24" fill="#00b3d7"></rect>
            <g>
              <polygon fill="#6c19ff" points="39,11 39,4 32,4"></polygon>
            </g>
            <g>
              <polygon fill="#7debf5" points="32,11 39,11 32,4"></polygon>
            </g>
          </svg>
        </div>
        <div className="flex gap-1 items-center">
          <span>
            <img className="w-5 h-5" src="\iconProgressStat.png" alt="" />
          </span>
          <p className="text-md text-green-600">+3 this month</p>
        </div>
      </div>
      <div className=" flex flex-col">
        <p className="text-xl font-semibold">{filterPost.allPost(posts)}</p>
        <p className="text-md ">Total Post</p>
      </div>
    </div>
  );
};

export default TotalPosts;
