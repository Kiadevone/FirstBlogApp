import React from "react";
import NewPostButton from "@/app/components/ui/buttons/NewPostButton";
import AnalyticsButton from "@/app/components/ui/buttons/AnalyticsButton";

const WelcomeHeader = () => {
  const formatTime = new Intl.DateTimeFormat("en-us", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date());

  return (
    <div className="mx-8 bg-gradient-to-r from-sky-200 to-green-100 mt-8 px-10 rounded-md py-10">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-y-2">
          <h4 className="text-black font-semibold text-4xl">
            Good Evening Sarah Johnson
          </h4>
          <div className="flex items-center gap-1">
            <span>
              <img className="w-4 h-4" src="/iconDate.png" alt="date" />
            </span>
            <time
              className="text-lg text-neutral-400/80"
              dateTime={new Date().toISOString()}
            >
              {formatTime}
            </time>
          </div>
        </div>
        <div className="flex gap-x-2">
          <NewPostButton />
          <AnalyticsButton />
        </div>
      </div>
      <hr className="px-20 border-gray-300 w-full my-4" />
      <div className="flex items-center justify-around">
        <div className="flex flex-col items-center">
          <span className="text-blue-500 text-3xl">12</span>
          <p className="text-xl">published</p>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-orange-500 text-3xl">1.2K</span>
          <p className="text-xl">views</p>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-green-500 text-3xl">10</span>
          <p className="text-xl">comment</p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeHeader;
