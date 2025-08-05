import { Posts } from "../Types/blogType";

export const fetchData = async () => {
  const response = await fetch("http://localhost:4000/post", {
    cache: "no-store",
  });
  const data = await response.json();
  if (!response.ok) throw new Error("Failed to fetch posts");
  return data as Promise<Posts[]>;
};
