import { status } from "@/app/Types/StatusTyps";

export interface Posts {
  id?: number;
  title: string;
  img: string;
  date?: string;
  body: string;
  view?: number;
  status?: status;
}
