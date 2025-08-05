import React from "react";
import AllPostHeader from "./AllPostHeader";
import SearchPart from "./SearchPart";
import AllPost from "./AllPost";
import { PostListProvider } from "../context/PostManageContext";

const AllPostPage = async () => {
  return (
    <div className="flex flex-col gap-y-6">
      <PostListProvider>
        <AllPostHeader />
        <hr className="px-20 border-gray-300 w-full my-4" />
        <SearchPart />
        <hr className="px-20 border-gray-300 w-full my-4" />
        <AllPost />
      </PostListProvider>
    </div>
  );
};

export default AllPostPage;
