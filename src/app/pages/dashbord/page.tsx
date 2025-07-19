import WelcomeHeader from "./components/welcomeHeader";
import Drafts from "./components/stats/Drafts";
import MonthlyViews from "./components/stats/MonthlyViews";
import Published from "./components/stats/Published";
import TotalPost from "./components/stats/TotalPosts";
import RecentlyPost from "./components/recentlyPost/RecentlyPost";
import QuickActions from "./components/quickActions/QuickActions";

const DashboardPage = () => {
  return (
    <div>
      <WelcomeHeader />
      <div className="flex mx-8 mt-8 gap-x-4">
        <TotalPost />
        <Published />
        <Drafts />
        <MonthlyViews />
      </div>
      <div className="flex  mx-8 gap-x-4 mt-8">
        <RecentlyPost />
        <QuickActions />
      </div>
    </div>
  );
};

export default DashboardPage;
