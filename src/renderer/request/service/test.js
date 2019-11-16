import { get } from '../request';

export const login = async () => {
  try {
    const result = await get('/login/cellphone', { phone: 15545191639, password: 'liyang1997...' });
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
