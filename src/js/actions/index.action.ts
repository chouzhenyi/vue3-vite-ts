export interface ADItem {
    id: number,
    title: string,
    link: string,
    src: string,
}

export class ADItemFrag {
    id: number = 0
    title: string = ''
    link: string = ''
    constructor(params: ADItem) {
        const { id, title, link } = params;
        this.id = id;
        this.title = title
        this.link = link
    }
}

export const adDataList = [
    {
        id: 0,
        title: '天猫新品',
        link: '',
        src: 'http://192.168.1.102:10110/images/ads/tmall.webp'
    },
    {
        id: 1,
        title: '今日爆款',
        link: '',
        src: 'http://192.168.1.102:10110/images/ads/ju.webp'
    },
    {
        id: 2,
        title: '天猫国际',
        link: '',
        src: 'http://192.168.1.102:10110/images/ads/haiwai.webp'
    },
    {
        id: 3,
        title: '飞猪旅行',
        link: '',
        src: 'http://192.168.1.102:10110/images/ads/feizhu.webp'
    },
    {
        id: 4,
        title: '天猫新品',
        link: '',
        src: 'http://192.168.1.102:10110/images/ads/tmall.webp'
    },
    {
        id: 5,
        title: '今日爆款',
        link: '',
        src: 'http://192.168.1.102:10110/images/ads/ju.webp'
    },
    {
        id: 6,
        title: '飞猪旅行',
        link: '',
        src: 'http://192.168.1.102:10110/images/ads/feizhu.webp'
    },
];