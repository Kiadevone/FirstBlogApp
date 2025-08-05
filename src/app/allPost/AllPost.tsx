"use client";
import SinglePost from "./SinglePost";
import { usePostManageContext } from "../context/PostManageContext";
import DeleteConfirmModal from "./ThreeDotsFeature/DeleteConfirmModal";
import EditPost from "./ThreeDotsFeature/EditPost";
import DuplicateConfirmPost from "./ThreeDotsFeature/DuplicatedPostModal";
import { useStatusFilter } from "../hooks/StatusFilterPost";

const AllPost = () => {
  const { modal, posts } = usePostManageContext();

  // get params from url and set params to setStatusFilter
  useStatusFilter();
  console.log(posts);
  return (
    <>
      <div className="grid grid-cols-3 place-items-center gap-y-6 gap-x-6 px-6">
        {posts.map((post) => (
          <SinglePost key={post.id} post={post} />
        ))}
      </div>
      {modal.modalType === "delete" && <DeleteConfirmModal />}
      {modal.modalType === "edit" && <EditPost />}
      {modal.modalType === "duplicate" && <DuplicateConfirmPost />}
    </>
  );
};

export default AllPost;
