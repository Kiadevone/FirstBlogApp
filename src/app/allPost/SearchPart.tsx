import React from "react";
import Search from "../Search";
import AllCategoriesButton from "../components/ui/buttons/AllCategoriesButton";
import AllStatusButton from "../components/ui/buttons/AllStatusButton";
import NewestFirtButton from "../components/ui/buttons/NewestFirtButton";

const SearchPart = () => {
  return (
    <div className="flex items-center justify-between mx-8">
      <Search width="w-[500px]" />
      <div className="flex flex-col gap-y-2">
        <div className="flex items-center gap-x-2">
          <AllCategoriesButton />
          <AllStatusButton />
          <NewestFirtButton />
        </div>
        <p></p>
      </div>
    </div>
  );
};

export default SearchPart;
