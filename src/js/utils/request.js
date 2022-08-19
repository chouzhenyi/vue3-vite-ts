import axios from 'axios';
const CancelToken = axios.CancelToken;
let cancelTokenCancel = null;

axios.defaults.withCredentials = true;

const instance = axios.create({
    baseURL: '',
    timeout: 6000,
    cancelToken: new CancelToken(function executor(c) {
        // executor 函数接收一个 cancel 函数作为参数
        cancelTokenCancel = c;
    })
});

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});
    
// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    cancelTokenCancel = null;
    const { data = {} } = response;
    const { data: resData } = data;
    return resData;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});


const request = {
    get(url, params, headers) {
        const getInstance = instance.get(
            url,
            {
                params,
                headers,
            },
        )
        return getInstance;
    },
    post(url, params, headers) {
        const postInstance = instance.post(
            url,
            {
                params,
            },
            headers,
        )
        return postInstance;
    },
    cancelRequest() {
        if(cancelTokenCancel) {
            cancelTokenCancel();
        }
    }
};

export default request;