import { Posts } from "./components/recentlyPost/PostType";

export const filterPost = {
  allPost: (posts: Posts[]) => posts.length,
  publishedPost: (posts: Posts[]) =>
    posts.filter((post) => post.status === "published").length,
  draftPost: (posts: Posts[]) =>
    posts.filter((post) => post.status === "draft").length,
  scheduledPost: (posts: Posts[]) =>
    posts.filter((post) => post.status === "scheduled").length,
};
