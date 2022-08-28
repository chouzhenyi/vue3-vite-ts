export interface ADItem {
  id: number;
  title: string;
  link: string;
  src: string;
}

export class ADItemFrag implements ADItem {
  id = 0;
  title = "";
  link = "";
  src = "";
  constructor(params: ADItem) {
    const { id, title, link, src } = params;
    this.id = id;
    this.title = title;
    this.link = link;
    this.src = src;
  }
}

export const adDataList = [
  {
    id: 0,
    title: "天猫新品",
    link: "",
    src: "/ads/tmall.webp",
  },
  {
    id: 1,
    title: "今日爆款",
    link: "",
    src: "/ads/ju.webp",
  },
  {
    id: 2,
    title: "天猫国际",
    link: "",
    src: "/ads/haiwai.webp",
  },
  {
    id: 3,
    title: "飞猪旅行",
    link: "",
    src: "/ads/feizhu.webp",
  },
  {
    id: 4,
    title: "天猫新品",
    link: "",
    src: "/ads/tmall.webp",
  },
  {
    id: 5,
    title: "今日爆款",
    link: "",
    src: "/ads/ju.webp",
  },
  {
    id: 6,
    title: "飞猪旅行",
    link: "",
    src: "/ads/feizhu.webp",
  },
];
