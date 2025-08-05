import React from "react";
import WelcomeHeader from "./components/WelcomeHeader";
import TotalPosts from "./components/stats/TotalPosts";
import Drafts from "./components/stats/Drafts";
import Published from "./components/stats/Published";
import MonthlyViews from "./components/stats/MonthlyViews";
import { fetchData } from "../api/fetchData";
import RecentlyPost from "./components/recentlyPost/RecentlyPost";
import QuickActions from "./components/quickActions/QuickActions";

interface Props {
  searchParams: Promise<{
    sortbyStatus?: string;
  }>;
}

const DashboardPage = async ({ searchParams }: Props) => {
  const posts = await fetchData();

  const { sortbyStatus } = await searchParams;

  return (
    <div className="flex flex-col mx-8 gap-y-10">
      <WelcomeHeader />
      <div className="flex items-center gap-x-4 mx-8 ">
        <TotalPosts posts={posts} />
        <Published posts={posts} />
        <Drafts posts={posts} />
        <MonthlyViews posts={posts} />
      </div>
      <div className="flex mx-8 gap-x-6">
        <RecentlyPost sortbyStatus={sortbyStatus} posts={posts} />
        <QuickActions />
      </div>
    </div>
  );
};

export default DashboardPage;
