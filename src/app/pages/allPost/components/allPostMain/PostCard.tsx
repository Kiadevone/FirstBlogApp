import React from "react";
import { Posts } from "@/app/pages/dashbord/components/recentlyPost/PostType";
import { StatusStyle } from "@/app/Constants/STATUS_STYLE_MAP";

interface Props {
  post: Posts;
}

const PostCard = ({
  post: { title, img, body, date, view, status },
}: Props) => {
  return (
    <div className="col-span-1 relative w-[450px] bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
      <img className="w-full h-52 object-cover" src={img} alt="Post image" />
      <span
        className={`text-xs absolute top-4 right-4 font-medium uppercase px-2 py-1 rounded ${StatusStyle[status]}`}
      >
        {status}
      </span>
      <div className="p-4 space-y-2">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        </div>

        <p className="text-gray-600 text-sm">{body}</p>

        <div className="flex justify-between text-gray-500 text-xs">
          <span>{date}</span>
          <span>{view} views</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
