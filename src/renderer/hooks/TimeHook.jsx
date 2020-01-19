/**
 * @description: 秒处理为分钟
 * @param {String} time 秒
 * @return {String} 分钟
 */
function useTime(time) {
  const totalMinute = time / 60;
  const endMinute = totalMinute % 1;
  let startMinute = totalMinute - endMinute;
  let ms = Math.round(endMinute * 60);
  if (startMinute < 10) {
    startMinute = `0${startMinute}`;
  }
  if (ms < 10) {
    ms = `0${ms}`;
  }
  return `${startMinute}:${ms}`;
}

export default useTime;
