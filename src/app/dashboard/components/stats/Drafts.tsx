import React from "react";

import { Posts } from "@/app/Types/blogType";
import { postStatusCounter } from "@/app/util/postCounter";

interface Props {
  posts: Posts[];
}

const Drafts = ({ posts }: Props) => {
  return (
    <div className="shadow-xs border-1 border-blue-100 shadow-blue-100 w-1/4 flex flex-col py-8 px-8 gap-y-2">
      <div className="flex items-center justify-between">
        <div className="bg-yellow-300/70 px-2 py-2 rounded-lg">
          <img className="w-8 h-8" src="\iconNote.png" alt="" />
        </div>
        <div className="flex gap-1 items-center">
          <span>
            <img className="w-5 h-5" src="\iconProgressStat.png" alt="" />
          </span>
          <p className="text-md text-green-600">+3 this month</p>
        </div>
      </div>
      <div className=" flex flex-col">
        <p className="text-xl font-semibold">
          {postStatusCounter.draft(posts)}
        </p>
        <p className="text-md ">draft</p>
      </div>
    </div>
  );
};

export default Drafts;
