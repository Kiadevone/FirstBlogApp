import React from "react";
import { Posts } from "@/app/Types/blogType";
import { StatusStyle } from "@/app/Constants/STATUS_STYLE_MAP";

interface Props {
  post: Posts;
}

const PostCard = ({
  post: { title, img, body, date, view, status },
}: Props) => {
  return (
    <div className="flex border-1 border-slate-200 mt-4 px-4 py-2 gap-x-4 relative">
      {/* Left Part */}
      <div>
        <img className="w-28 h-24 rounded-lg" src={img} alt="PostImg" />
      </div>
      {/* Right Part */}
      <div className="flex flex-col gap-y-4">
        <h5 className="font-semibold text-slate-800 text-lg hover:text-blue-500">
          {title}
        </h5>
        <p className="text-neutral-600">{body}</p>
        <div className="flex items-center gap-x-4">
          <div className="flex gap-x-1 items-center">
            <span>
              <img className="w-3 h-3" src="\iconDatePostCard.png" alt="date" />
            </span>
            <time>{date}</time>
          </div>
          <div className="flex items-center gap-x-1">
            <span>
              <img className="w-3 h-3" src="\iconView.png" alt="" />
            </span>
            <p>{view}</p>
          </div>
        </div>
      </div>
      {/* status */}
      <div
        className={`${StatusStyle[status]} absolute right-2 top-2 rounded-md px-3 py-1`}
      >
        {status}
      </div>
    </div>
  );
};

export default PostCard;
