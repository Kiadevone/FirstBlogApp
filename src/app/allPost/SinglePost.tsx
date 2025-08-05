import { Posts } from "../Types/blogType";
import ThreeDots from "./ThreeDots";

interface Props {
  post: Posts;
}

const SinglePost = ({ post: { img, title, body, date, view, id } }: Props) => {
  return (
    <div className="col-span-1 h-[360px] w-full border border-slate-200 rounded-2xl overflow-hidden shadow-lg bg-white  transition-colors duration-300">
      <div className="relative">
        <img src={img} alt="Post" className="w-full h-48 object-cover" />
        <ThreeDots id={id} />
      </div>

      <div className="p-4 space-y-3">
        <h2 className="text-xl font-semibold text-gray-800 ">{title}</h2>
        <p className="text-gray-600 text-sm">{body}</p>
      </div>

      <div className="flex items-center justify-between px-4 pb-4 text-xs text-gray-500">
        <span>👁️ {view} views</span>
        <span>📅 {date}</span>
      </div>
    </div>
  );
};

export default SinglePost;
