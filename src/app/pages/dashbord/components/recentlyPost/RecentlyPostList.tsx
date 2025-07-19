import React from "react";
import PostCard from "./PostCard";
import { Posts } from "./PostType";

interface RecentlyPostListProps {
  posts: Posts[];
}

const RecentlyPostList = ({ posts }: RecentlyPostListProps) => {
  return (
    <div className="px-6 max-h-[430px] overflow-y-auto">
      {posts?.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  );
};

export default RecentlyPostList;
