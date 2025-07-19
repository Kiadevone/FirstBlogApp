import React from "react";
import NewPost from "./NewPost";
import AllPost from "./AllPost";
import Categories from "./Categories";
import Analytics from "./Analytics";
import QuickLinks from "./QuickLinks";

const QuickActions = () => {
  return (
    <div className="flex flex-col w-2/6 border-1 border-slate-300 px-6 max-h-[480px]">
      <NewPost />
      <AllPost />
      <Categories />
      <Analytics />
      <hr className=" border-gray-300 w-full my-5" />
      <h6 className="text-lg text-slate-800">Quick Links</h6>
      <QuickLinks />
    </div>
  );
};

export default QuickActions;
