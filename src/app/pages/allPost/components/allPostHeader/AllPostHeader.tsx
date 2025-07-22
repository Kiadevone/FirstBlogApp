import React from "react";
import NewPostButton from "@/app/pages/dashbord/components/NewPostButton";
import ImportButton from "../ImportButton";

const AllPostHeader = () => {
  return (
    <div className="flex items-center justify-between py-8">
      <div className="flex flex-col gap-y-3">
        <h1 className="text-4xl font-semibold text-black">All Posts</h1>
        <p className="text-lg text-neutral-500">Manage your 13 blog posts</p>
      </div>
      <div className="flex items-center gap-x-2">
        <NewPostButton />
        <ImportButton />
      </div>
    </div>
  );
};

export default AllPostHeader;
