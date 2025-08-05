"use client";
import React, { useState } from "react";
import ThreeDotMenu from "./ThreeDotMenu";

interface Props {
  id?: number;
}

const ThreeDots = ({ id }: Props) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleShowMenu = () => {
    setIsOpenMenu((prev) => !prev);
  };

  return (
    <div
      onClick={handleShowMenu}
      className="bg-white rounded-lg px-3 py-3 absolute right-2 bottom-2 cursor-pointer"
    >
      <div className="relative">
        <img className="w-5 h-5" src="\threeIcon.png" alt="3dots" />
        {isOpenMenu && <ThreeDotMenu id={id} />}
      </div>
    </div>
  );
};

export default ThreeDots;
