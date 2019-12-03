import { get } from '../request';

export const login = async () => {
  try {
    const result = await get('/login/cellphone', { phone: '', password: '' });
    console.log(result);
  } catch (e) {
    console.log(e);
  }
};

export const getLoginStatus = async () => {
  try {
    const result = await get('/login/status');
    console.log(result);
  } catch (e) {
    console.log(e);
  }
};
