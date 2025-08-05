import RecentPostHeader from "./RecentPostHeader";
import RecentlyPostList from "./RecentlyPostList";
import { Posts } from "@/app/Types/blogType";

interface Props {
  posts: Posts[];
  sortbyStatus?: string;
}

const RecentlyPost = ({ posts, sortbyStatus }: Props) => {
  const filterPost = posts.filter((post) => post.status === sortbyStatus);

  const filteredPost =
    sortbyStatus && !(sortbyStatus == "all") ? filterPost : posts;

  return (
    <div className="w-4/6 border-1 border-slate-200">
      {posts.length && <RecentPostHeader allPost={posts} />}
      {posts.length && <RecentlyPostList posts={filteredPost} />}
    </div>
  );
};

export default RecentlyPost;
