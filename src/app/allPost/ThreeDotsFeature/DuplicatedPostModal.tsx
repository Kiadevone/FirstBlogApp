import { usePostManageContext } from "@/app/context/PostManageContext";
import React from "react";

const DuplicateConfirmPost = () => {
  const { handleDuplicated, closeModal } = usePostManageContext();

  return (
    <div>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
        <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-xl w-full max-w-sm p-6 space-y-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white text-center">
            Are you sure you want to duplicate this item?
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
            This action cannot be undone.
          </p>
          <div className="flex justify-center space-x-4 pt-2">
            <button
              onClick={() => {
                handleDuplicated();
                closeModal();
              }}
              className="px-4 py-2 cursor-pointer rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
            >
              Confirm
            </button>
            <button
              onClick={closeModal}
              className="px-4 py-2 cursor-pointer rounded-lg bg-gray-200 dark:bg-neutral-800 text-gray-800 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-neutral-700 transition"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DuplicateConfirmPost;
