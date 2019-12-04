export const getPlatform = () => {
  if (window.navigator.platform === 'Win32') {
    return 'WIN';
  }
  return 'MAC';
};

export const a = () => {};
