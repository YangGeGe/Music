import axios from 'axios';

let baseURL = '';
if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3000';
} else {
  // baseURL = '';
}
const request = axios.create({
  baseURL,
  timeout: 10000,
});

request.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
})
;