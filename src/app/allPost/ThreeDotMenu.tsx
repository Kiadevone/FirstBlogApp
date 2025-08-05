import React from "react";
import Edit from "./ThreeDotsFeature/Edit";
import Delete from "./ThreeDotsFeature/Delete";
import Duplicate from "./ThreeDotsFeature/Duplicate";

interface Props {
  id?: number;
}

const ThreeDotMenu = ({ id }: Props) => {
  return (
    <div className="flex flex-col gap-y-2  rounded-md bg-white absolute w-44 -top-32 right-0">
      <Edit id={id} />
      <Delete id={id} />
      <Duplicate id={id} />
    </div>
  );
};

export default ThreeDotMenu;
