import { usePostManageContext } from "@/app/context/PostManageContext";
import React from "react";

interface Props {
  id?: number;
}

const Edit = ({ id }: Props) => {
  const { openModal } = usePostManageContext();

  return (
    <div
      onClick={() => openModal("edit", id)}
      className="flex items-center gap-x-2 pl-2 py-1 cursor-pointer hover:bg-slate-100"
    >
      <img className="w-5 h-5" src="\editIconPost.png" alt="editIcon" />
      <span className="font-normal text-slate-700 text-md">Edit</span>
    </div>
  );
};

export default Edit;
