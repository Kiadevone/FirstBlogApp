import React from "react";
import Link from "next/link";

const AllPost = () => {
  return (
    <div className="bg-slate-500 rounded-md mt-2 py-1">
      <Link className="" href="/">
        <div className="flex items-center justify-center gap-x-3">
          <img className="w-6 h-6" src="\iconFile.png" alt="file" />
          <div className="flex flex-col">
            <h6 className="text-lg text-white">All Post</h6>
            <p className="text-slate-300">view and manage all post</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default AllPost;
