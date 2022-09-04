import type { AxiosResponse } from "axios";
import request from "@/scripts/utils/request";
import type { ProductItemType } from "@/scripts/types/mall";

export const mobileIndexData = () => {
  const url = "./json/taobao.json";
  return request.get(url).then((res: AxiosResponse["data"]) => {
    const result = res.model?.result || {};
    const { recommedResult } = result;
    const list = recommedResult[0]?.itemList;
    return {
      list: list.map((item: ProductItemType) => {
        const {
          extMap,
          marketPrice, // 售价
          normalPrice, // 官方指导价
          picUrl, // 橱窗图片
          pvid,
          targetUrl, // 商品地址
          title, // 商品标题
          itemId,
        } = item;
        const { recExc, similarUrl } = extMap;
        return {
          marketPrice, // 售价
          normalPrice, // 官方指导价
          picUrl, // 橱窗图片
          pvid,
          targetUrl, // 商品地址
          title, // 商品标题
          extMap: {
            recExc,
            similarUrl,
          },
          itemId,
        };
      }),
    };
  });
};
