"use client";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Posts } from "../pages/dashbord/components/recentlyPost/PostType";

const PostContext = createContext<Posts[]>([]);

export const usePosts = () => useContext(PostContext);

export const PostProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPost = async (): Promise<void> => {
      try {
        const res = await fetch("http://localhost:4000/post", {
          cache: "no-store",
        });
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPost();
  }, []);

  return <PostContext.Provider value={posts}>{children}</PostContext.Provider>;
};
