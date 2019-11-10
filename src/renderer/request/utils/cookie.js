/**
 * 设置cookie
 * @param name cookie的名称
 * @param value cookie的值
 * @param time cookie的过期时间 天数（3）或日期（2019/11/10）
 */

export function setCookie(name, value, time) {
  let expires = '';
  if (time) {
    let miliSecond = 0;
    if (typeof time === 'number') {
      miliSecond = new Date().getTime() + (time * 24 * 3600 * 1000);
    } else {
      miliSecond = new Date(time).getTime();
    }
    expires = new Date(miliSecond);
  }
  document.cookie = `${name}=${value}; expires=${expires}`;
}

/**
 * 获取cookie
 * @param name cookie的名称
 * @returns {null || string} 不存在时，返回null
 */

export function getCookie(name) {
  const cookieArray = document.cookie.split(';');
  const targetCookie = cookieArray.find(cookie => {
    const nameValueArray = cookie.split('=');
    return nameValueArray[0] === name;
  });
  if (targetCookie) {
    return targetCookie.split('=')[1];
  }
  return null;
}

/**
 * 删除cookie
 * @param name cookie的名称
 * @returns {null || string} 不存在时，返回null
 */

export function deleteCookie(name) {
  setCookie(name, '', -1);
}
