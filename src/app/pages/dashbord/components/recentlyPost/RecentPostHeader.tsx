"use client";
import React from "react";
import Link from "next/link";
import { Posts } from "./PostType";

interface Props {
  posts: Posts[];
  statusCounts: {
    published: number;
    scheduled: number;
    draft: number;
    all: number;
  };
}

const RecentPostHeader = ({ statusCounts }: Props) => {
  return (
    <div className="flex flex-col border-1 border-slate-200 px-6 gap-y-5 py-10">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-black text-3xl">Recentl Post</h2>
        <div className="flex items-center gap-x-4">
          <button className="flex items-center justify-center hover:bg-blue-500 w-12 h-12 rounded-md cursor-pointer">
            <img className="w-6 h-6" src="\iconRefresh.png" alt="refresh" />
          </button>
          <Link
            href="/pages/allPost"
            className="flex text-xl items-center gap-x-1 text-white bg-slate-500/80 rounded-lg px-6 py-2"
          >
            View All <span className="text-3xl text-slate-500"> &rarr; </span>
          </Link>
        </div>
      </div>
      <div className="flex gap-x-1">
        <Link href={`?status=all`} scroll={false}>
          <div className="bg-blue-500 text-white text-md px-5 py-2 rounded-full flex items-center gap-x-2 cursor-pointer">
            All Posts{" "}
            <span className="text-sm text-blue-600 px-2  rounded-full bg-blue-300 ">
              {statusCounts.all}
            </span>
          </div>
        </Link>
        <Link href={`?status=published`} scroll={false}>
          <div className="bg-slate-400/80 text-white text-md px-5 py-2 rounded-full flex items-center gap-x-2 cursor-pointer">
            Published{" "}
            <span className="text-sm text-white px-2  rounded-full bg-slate-400 ">
              {statusCounts.published}
            </span>
          </div>
        </Link>
        <Link href={`?status=draft`} scroll={false}>
          <div className="bg-slate-400/80 text-white text-md px-5 py-2 rounded-full flex items-center gap-x-2 cursor-pointer">
            Drafts{" "}
            <span className="text-sm text-white px-2  rounded-full bg-slate-400 ">
              {" "}
              {statusCounts.draft}
            </span>
          </div>
        </Link>
        <Link href={`?status=scheduled`} scroll={false}>
          <div className="bg-slate-400/80 text-white text-md px-5 py-2 rounded-full flex items-center gap-x-2 cursor-pointer">
            scheduled{" "}
            <span className="text-sm text-white px-2  rounded-full bg-slate-400 ">
              {" "}
              {statusCounts.scheduled}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default RecentPostHeader;
