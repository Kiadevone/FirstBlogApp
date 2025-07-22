import Search from "@/app/Search";
import React from "react";
import AllCategoriesButton from "./AllCategoriesButton";
import AllStatusButton from "./AllStatusButton";
import NewstFirstButton from "./NewstFirstButton";

const SearchedSection = () => {
  return (
    <div>
      <div className="flex items-center justify-between py-4">
        <Search width="w-[400px]" />
        <div className="flex items-center gap-x-3">
          <AllCategoriesButton />
          <AllStatusButton />
          <NewstFirstButton />
        </div>
      </div>
      <p className="text-slate-700 text-lg flex justify-end">8 post found</p>
    </div>
  );
};

export default SearchedSection;
