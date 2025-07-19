import React from "react";

interface Props {
  id: number;
  title: string;
  img: string;
  date: string;
  body: string;
  view: number;
  status: string;
}

type status = "published" | "draft" | "scheduled";

const PostCard = ({ title, img, date, body, view, status }: Props) => {
  const statusType: Record<status, string> = {
    published: "bg-green-100 text-green-700",
    draft: "bg-yellow-100 text-yellow-700",
    scheduled: "bg-gray-100 text-gray-500",
  };

  return (
    <div className="flex border-1 border-slate-200 mt-4 px-4 py-2 gap-x-4 relative">
      {/* Left Part */}
      <div>
        <img className="w-28 h-24 rounded-lg" src={img} alt="" />
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
        className={`${statusType[status]} absolute right-2 top-2 rounded-md px-3 py-1`}
      >
        {status}
      </div>
    </div>
  );
};

export default PostCard;
