// 商品类型
export interface ProductItemType {
  marketPrice: string; // 售价
  normalPrice: string; // 官方指导价
  picUrl: string; // 橱窗图片
  pvid: string;
  targetUrl: string; // 商品地址
  title: string; // 商品标题
  extMap: {
    recExc: string;
    similarUrl: string;
  };
  itemId: string;
}
// 广告导航类型
export interface AdType {
  id: string | number;
  title: string;
  link: string;
  src: string;
}
