import request from "@/scripts/utils/request";
import type { AxiosResponse } from "axios";

export const schoolAreaData = () => {
  const url = "./json/school/range.json";
  return request.get(url).then((res: AxiosResponse["data"]) => {
    return res.stage;
  });
};
