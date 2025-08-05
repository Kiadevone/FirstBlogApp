import { z } from "zod";

export const editPostCshema = z.object({
  title: z.string().min(3, { message: "title must be 3 characters at least" }),
  body: z.string().min(10, { message: "detail must be 10 charcters at least" }),
  img: z.string().url({ message: "url is not valid" }),
});
