import { get } from '../request';

const loginApi = '/login/cellphone';
const loginStatusApi = '/login/status';

export const loginRequest = async (params) => {
  const result = await get(loginApi, params);
  return result;
};

export const getLoginStatus = async () => {
  try {
    const result = await get(loginStatusApi);
    console.log(result);
  } catch (e) {
    console.log(e);
  }
};
