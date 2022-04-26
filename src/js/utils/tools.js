export const add = (a, b) => {
    return a + b;
};

export const randomStr = () => {
    return Math.floor(Math.random() * 1e5);
}

// 路由跳转分析
export const sendToAnalytics = (params) => {
    console.log('分析', params);
};