import React from "react";
import { Posts } from "../Types/blogType";

interface Props {
  props: Posts;
}

const Searched = ({ props: { title, body, view, date, img } }: Props) => {
  return (
    <div className="flex items-center justify-center overflow-hidden h-screen bg-gradient-to-r from-purple-400 to-indigo-300">
      <main className="flex flex-col bg-white rounded-md px-6 gap-y-2 py-2">
        <div className="flex items-center gap-x-4">
          <div>
            <img className="rounded-full w-24 h-24" src={img} alt="profile" />
          </div>
          <div className="flex flex-col">
            <h1 className="font-semibold text-slate-800 text-lg">{title}</h1>
            <div className="flex  items-center gap-x-8">
              <div className="flex gap-x-1 items-center">
                <span>
                  <img
                    className="w-3 h-3"
                    src="\iconDatePostCard.png"
                    alt="date"
                  />
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
        </div>
        <p className="text-lg text-neutral-500">{body}</p>
      </main>
    </div>
  );
};

export default Searched;
