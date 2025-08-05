"use client";
import { usePostManageContext } from "@/app/context/PostManageContext";
import { SortFilterType } from "@/app/Types/SortFilterType";

const NewestFirtButton = () => {
  const { setSortFilter } = usePostManageContext();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortFilter(e.target.value as SortFilterType);
  };

  return (
    <select
      onChange={handleChange}
      className="px-4 py-2 text-lg bg-slate-100 border-1 border-slate-200 rounded-md"
    >
      <option value="none">no filter</option>
      <option value="newest">Newest First</option>
      <option value="oldest">Oldest First</option>
      <option value="a-z">A-Z</option>
    </select>
  );
};

export default NewestFirtButton;
