"use client";
import React, { useEffect } from "react";
import {
  CldUploadWidget,
  CloudinaryUploadWidgetResults,
} from "next-cloudinary";
import { usePostManageContext } from "@/app/context/PostManageContext";
import { z } from "zod";
import { editPostCshema } from "@/app/schemas/editPostSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateData } from "@/app/api/updateData";

type EditPostSchema = z.infer<typeof editPostCshema>;

const EditPost = () => {
  const { modal, setAllPosts, closeModal, allPosts } = usePostManageContext();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<EditPostSchema>({
    resolver: zodResolver(editPostCshema),
    mode: "all",
  });

  const onSumbit = async (data: EditPostSchema) => {
    try {
      if (!modal.selectedId) return;
      const updatePost = await updateData(modal.selectedId, data);

      setAllPosts((prev) =>
        prev.map((post) =>
          post.id === modal.selectedId ? { ...post, ...updatePost } : post
        )
      );

      closeModal();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const slectedPost = allPosts.find((post) => post.id === modal.selectedId);
    if (modal.modalType === "edit" && modal.selectedId) {
      if (slectedPost) {
        setValue("title", slectedPost.title);
        setValue("img", slectedPost.img);
        setValue("body", slectedPost.body);
      }
    }
  }, [modal, setValue, allPosts]);

  return (
    <div className=" fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <form
        onSubmit={handleSubmit(onSumbit)}
        className="rounded-md flex flex-col w-full max-w-md gap-y-2 p-8 justify-center items-center bg-gradient-to-l from-sky-800 to-slate-400 "
      >
        <div className="flex items-center justify-center w-full bg-slate-100 h-50 border-2 border-dashed hover:bg-blue-200 border-blue-500">
          <CldUploadWidget
            onSuccess={(result: CloudinaryUploadWidgetResults) => {
              if (result.info && typeof result.info !== "string") {
                const url = result?.info.secure_url;
                setValue("img", url);
              }
            }}
            uploadPreset="cloudinary-Blog-app "
          >
            {({ open }) => {
              return (
                <button
                  className="text-blue-500 text-xl cursor-pointer"
                  type="button"
                  onClick={() => open()}
                >
                  Upload an Image
                </button>
              );
            }}
          </CldUploadWidget>
        </div>
        <div className="flex flex-col w-full gap-x-2">
          <input
            {...register("title")}
            className="h-10  bg-white rounded-md pl-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            placeholder="New title?"
          />
          {errors.title && (
            <p className="text-xs text-red-500">{errors.title.message}</p>
          )}
        </div>
        <div className="flex flex-col w-full gap-x-2">
          <textarea
            {...register("body")}
            className=" h-24 border border-gray-300 bg-white rounded-md px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="New detail?"
          />
          {errors.body && (
            <p className="text-xs text-red-500">{errors.body.message}</p>
          )}
        </div>
        <div className="flex gap-x-2 w-full">
          <button
            type="submit"
            className="flex-1 bg-blue-500 font-semibold cursor-pointer text-lg text-white rounded-md px-6 py-2"
          >
            Sumbit
          </button>
          <button
            onClick={() => closeModal()}
            className="flex-1 bg-red-500 font-semibold cursor-pointer text-lg text-slate-800 rounded-md px-6 py-2"
          >
            Cancle
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditPost;
