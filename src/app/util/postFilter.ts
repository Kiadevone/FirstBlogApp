import { Posts } from "../Types/blogType";

interface filterPostType {
  published: (posts: Posts[]) => Posts[] | undefined;
  scheduled: (posts: Posts[]) => Posts[] | undefined;
  draft: (posts: Posts[]) => Posts[] | undefined;
}

const filterPosts: filterPostType = {
  published: (posts: Posts[]) =>
    posts?.filter((post) => post.status === "published"),
  scheduled: (posts: Posts[]) =>
    posts?.filter((post) => post.status === "scheduled"),
  draft: (posts: Posts[]) => posts?.filter((post) => post.status === "draft"),
};
