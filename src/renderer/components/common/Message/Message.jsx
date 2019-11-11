import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './Message.less';

class MessageBox extends Component {
  constructor() {
    super();
    this.transitionTime = 300;
    this.state = { notices: [] };
    this.removeNotice = this.removeNotice.bind(this);
  }

  // 邦迪唯一的key
  getNoticeKey() {
    const { notices } = this.state;
    return `notice-${new Date().getTime()}-${notices.length}`;
  }

  addNotice(notice) {
    const { notices } = this.state;
    notice.key = this.getNoticeKey();
    // notices.push(notice);//展示所有的提示
    notices[0] = notice;// 仅展示最后一个提示
    this.setState({ notices });
    if (notice.duration > 0) {
      setTimeout(() => {
        this.removeNotice(notice.key);
      }, notice.duration);
    }
    return () => { this.removeNotice(notice.key); };
  }

  removeNotice(key) {
    const { notices } = this.state;
    this.setState({
      notices: notices.filter((notice) => {
        if (notice.key === key) {
          if (notice.onClose) { setTimeout(notice.onClose, this.transitionTime); }
          return false;
        }
        return true;
      }),
    });
  }

  render() {
    const { notices } = this.state;
    const icons = {
      info: 'toast_info',
      success: 'toast_success',
      error: 'toast_error',
      loading: 'toast_loading',
    };
    return (
      <div styleName="toast">
        {
          notices.map(notice => (
            <div styleName="toast_bg" key={ notice.key }>
              <div styleName="toast_box">
                <div styleName={ `toast_icon ${icons[notice.type]}` }/>
                <div styleName="toast_text">{notice.content}</div>
              </div>
            </div>
          ))
        }
      </div>
    );
  }
}

export default CSSModules(MessageBox, styles);

