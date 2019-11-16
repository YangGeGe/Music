import axios from 'axios';
import message from '../components/common/Message/index';

axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.timeout = 10000;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';// type后续需要再添加

axios.interceptors.request.use(config => {
  config.withCredentials = true; // 允许跨域
  return config;
},

error => Promise.error(error));

axios.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return Promise.resolve(response);
    }
    return Promise.reject(response);
  },
  error => {
    if (error.response.status) {
      switch (error.response.status) {
        // TODO: 状态码的处理
        default:
          message.error('网络异常，请稍后再试！');
      }
    }
  }
);

export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params,
    }).then(res => {
      resolve(res.data);
    }).catch(err => {
      reject(err.data);
    });
  });
}

export function post(url, params) {
  const paramString = JSON.stringify(params);
  return new Promise((resolve, reject) => {
    axios.post(url, paramString)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data);
      });
  });
}
