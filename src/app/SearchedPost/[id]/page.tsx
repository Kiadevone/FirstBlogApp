import React from "react";
import Searched from "../Searched";
import { Posts } from "@/app/pages/dashbord/components/recentlyPost/PostType";

interface Props {
  params: { id: number };
}

const SearchedPostPage = async ({ params: { id } }: Props) => {
  const res = await fetch("http://localhost:4000/post");
  const posts: Posts[] = await res.json();

  const [selectedPost] = posts.filter((post) => post.id === id);

  return <div>{selectedPost && <Searched props={selectedPost} />}</div>;
};

export default SearchedPostPage;
