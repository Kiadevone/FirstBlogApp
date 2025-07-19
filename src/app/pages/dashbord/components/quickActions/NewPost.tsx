import React from "react";
import Link from "next/link";

const NewPost = () => {
  return (
    <div className="bg-blue-500 rounded-md mt-2 py-1">
      <Link className="" href="/">
        <div className="flex items-center justify-center gap-x-3">
          <span className="text-3xl text-slate-800 text-white">+</span>
          <div className="flex flex-col">
            <h6 className="text-lg text-white">New Post</h6>
            <p className="text-slate-300">create new post</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default NewPost;
