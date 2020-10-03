/**
 * 封装 axios
 * 
 */

import Axios from 'axios';

// 自定义实例 axios
const instance = Axios.create({
    // baseURL: process.env.APP_BASE_API_URL
    baseURL:"http://localhost:3000"
});

// 请求拦截器
instance.interceptors.request.use(
  config => {
    // 可设置 token
    console.log(config)
    return config;
  },
  error => Promise.reject(error)
);

// 返回拦截器
instance.interceptors.response.use(
  res => {
      console.log(res)
    if (res.status === 200 && res.data.code === 200) {
      return res.data;
    }
    return Promise.reject(res);
  },
  error => Promise.reject(error)
);

export default instance;
