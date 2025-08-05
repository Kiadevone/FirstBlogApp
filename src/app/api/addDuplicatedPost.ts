import { Posts } from "../Types/blogType";

export const addDuplicatePost = async (duplicatedPost: Posts) => {
  const res = await fetch(`http://localhost:4000/post`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(duplicatedPost),
  });
  const data = await res.json();
  if (!res.ok) throw new Error("unsecsseus to duplicat this post");
  return data;
};
