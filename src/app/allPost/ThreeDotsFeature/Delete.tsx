"use client";

import { usePostManageContext } from "@/app/context/PostManageContext";

interface Props {
  id?: number;
}

const Delete = ({ id }: Props) => {
  const { openModal } = usePostManageContext();

  return (
    <div
      onClick={() => openModal("delete", id)}
      className="flex items-center gap-x-2 pl-2 py-1 cursor-pointer hover:bg-slate-100"
    >
      <img className="w-5 h-5" src="\deleteIcon.png" alt="deleteIcon" />
      <span className="font-normal text-slate-700 text-md">Delete</span>
    </div>
  );
};

export default Delete;
