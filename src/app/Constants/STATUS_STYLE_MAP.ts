import { status } from "@/app/Types/StatusTyps";

export const StatusStyle: Record<status, string> = {
  published: "bg-green-100 text-green-700",
  draft: "bg-yellow-100 text-yellow-700",
  scheduled: "bg-gray-100 text-gray-500",
};
