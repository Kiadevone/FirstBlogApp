"use client";
import React from "react";
import AnalyticsButton from "../components/ui/buttons/AnalyticsButton";
import NewPostButton from "../components/ui/buttons/NewPostButton";
import { postStatusCounter } from "../util/postCounter";
import { usePostManageContext } from "../context/PostManageContext";

const AllPostHeader = () => {
  const { posts } = usePostManageContext();

  return (
    <div className="flex items-center justify-between mx-8 py-6">
      <div className="flex flex-col gap-y-2">
        <h1 className="text-3xl text-black font-semibold">All Posts</h1>
        <p className="font-medium text-slate-500">
          Manage your {postStatusCounter.all(posts)} blog Posts
        </p>
      </div>
      <div className="flex gap-x-2">
        <NewPostButton />
        <AnalyticsButton />
      </div>
    </div>
  );
};

export default AllPostHeader;
