import { usePostManageContext } from "@/app/context/PostManageContext";
import React from "react";

interface Props {
  id?: number;
}

const Duplicate = ({ id }: Props) => {
  const { openModal } = usePostManageContext();

  return (
    <div
      onClick={() => {
        openModal("duplicate", id);
      }}
      className="flex items-center gap-x-2 pl-2 py-1  hover:bg-slate-100"
    >
      <img className="w-5 h-5" src="\DuplicateIcon.png" alt="duplicateIcon" />
      <span className="font-normal text-slate-700 text-md">Duplicate</span>
    </div>
  );
};

export default Duplicate;
