import { SearchParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";
import { useRouter, useSearchParams } from "next/navigation";
import { Router } from "next/router";

type Status = "published" | "scheduled" | "draft" | "all";

export const useUpdateQuery = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const updateQuery = (status: Status) => {
    const params = new URLSearchParams(searchParams.toString());

    if (status === "all") {
      params.delete("status");
    } else {
      params.set("status", status);
    }

    params.set("page", "1");
    router.push(`?${params.toString()}`, { scroll: false });
  };
  return { updateQuery };
};
