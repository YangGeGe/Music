import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import MessageBox from './message.jsx';

function createMessage(){
  const div = document.createElement('div')
  document.body.appendChild(div)
  const notification = ReactDOM.render(<MessageBox />, div)
  return {
    addNotice(notice) {
      return notification.addNotice(notice);
    },
    // destroy() {
    //   ReactDOM.unmountComponentAtNode(div);
    //   document.body.removeChild(div);
    // }
  }
}

let notification;
const notice = (type, content, duration = 3000,) => {
  if (!notification) notification = createMessage();
  return notification.addNotice({ type, content, duration });
}

export default {
  info(content, duration) {
    return notice('info', content, duration)
  },
  success(content = '操作成功', duration) {
    return notice('success', content, duration)
  },
  error(content, duration) {
    return notice('error', content, duration)
  },
  warning(content, duration) {
    return notice('warning', content, duration)
  },
  loading(content = '加载中...', duration = 0) {
    return notice('loading', content, duration)
  }
}