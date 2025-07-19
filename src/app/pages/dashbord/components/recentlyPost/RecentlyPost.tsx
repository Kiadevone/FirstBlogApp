"use client";
import RecentPostHeader from "./RecentPostHeader";
import RecentlyPostList from "./RecentlyPostList";
import { usePosts } from "@/app/context/PostsContext";
import { useSearchParams } from "next/navigation";
import { filterPost } from "../../filterPost";

const RecentlyPost = () => {
  let posts = usePosts();

  const searchParams = useSearchParams();
  const status = searchParams.get("status") ?? "all";

  const statusCounts = {
    all: filterPost.allPost(posts),
    published: filterPost.publishedPost(posts),
    scheduled: filterPost.scheduledPost(posts),
    draft: filterPost.draftPost(posts),
  };

  posts =
    status === "all" ? posts : posts.filter((post) => post.status === status);

  return (
    <div className="w-4/6 border-1 border-slate-200">
      {posts.length && (
        <RecentPostHeader posts={posts} statusCounts={statusCounts} />
      )}
      {posts.length && <RecentlyPostList posts={posts} />}
    </div>
  );
};

export default RecentlyPost;
