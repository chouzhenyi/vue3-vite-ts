import request from '../utils/request'

export const mobileIndexData = () => {
    const url = '/json/taobao.json'
    return request.get(url).then((res: any) => {
        const result = res.model?.result || {};
        const { recommedResult } = result;
        const list = recommedResult[0]?.itemList;
        return {
          list: list.map((item: any) => {
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
            const {
              recExc,
              similarUrl
            } = extMap;
            return {
              marketPrice, // 售价
              normalPrice, // 官方指导价
              picUrl, // 橱窗图片
              pvid,
              targetUrl, // 商品地址
              title, // 商品标题
              extMap: {
                recExc,
                similarUrl
              },
              itemId,
            }
          })
        }
      })
};