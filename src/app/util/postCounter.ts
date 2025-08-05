import { Posts } from "../Types/blogType";

interface postStatusCounterType {
  all: (posts: Posts[]) => number | undefined;
  published: (posts: Posts[]) => number | undefined;
  scheduled: (posts: Posts[]) => number | undefined;
  draft: (posts: Posts[]) => number | undefined;
}

export const postStatusCounter: postStatusCounterType = {
  all: (posts: Posts[]) => posts.length,
  published: (posts: Posts[]) =>
    posts?.filter((post) => post.status === "published").length,
  scheduled: (posts: Posts[]) =>
    posts?.filter((post) => post.status === "scheduled").length,
  draft: (posts: Posts[]) =>
    posts?.filter((post) => post.status === "draft").length,
};
