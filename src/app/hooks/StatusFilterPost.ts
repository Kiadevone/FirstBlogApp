import { useEffect } from "react";
import { usePostManageContext } from "../context/PostManageContext";
import { useSearchParams } from "next/navigation";
import { status } from "../Types/StatusTyps";

export const useStatusFilter = () => {
  const { setStatusFilter } = usePostManageContext();
  const params = useSearchParams();
  useEffect(() => {
    const paramsStatus = params.get("filterPost") as status | null;

    if (paramsStatus) {
      setStatusFilter(paramsStatus as status);
    }
  }, [params, setStatusFilter]);
};
