"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const AllStatusButton = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const status = e.target.value;
    const params = new URLSearchParams(searchParams);

    if (status) {
      params.set("filterPost", status);
    } else {
      params.delete("filterPost");
    }
    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="relative">
      <select
        onChange={handleChange}
        className="px-4 py-2 text-lg bg-slate-100 border-1 border-slate-200 rounded-md"
      >
        <option value="all">All Status</option>
        <option value="published">Published</option>
        <option value="scheduled">Scheduled</option>
        <option value="draft">Draft</option>
      </select>
    </div>
  );
};

export default AllStatusButton;
