import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import style from './index.less';

class MessageBox extends Component {
  constructor() {
    super()
    this.state = { notices: [] }
    this.removeNotice = this.removeNotice.bind(this)
  }
  //邦迪唯一的key
  getNoticeKey() {
    const { notices } = this.state
    return `notice-${new Date().getTime()}-${notices.length}`
  }
  addNotice(notice) {
    const { notices } = this.state
    notice.key = this.getNoticeKey()
    notices[0] = notice;//仅展示最后一个提示
    this.setState({ notices })
    if (notice.duration > 0) {
      setTimeout(() => {
        this.removeNotice(notice.key)
      }, notice.duration)
    }
    return () => { this.removeNotice(notice.key) }
  }
  removeNotice(key) {
    const { notices } = this.state
    this.setState({
      notices: notices.filter((notice) => {
        if (notice.key === key) {
          return false
        }
        return true
      })
    })
  }
  render() {
    const { notices } = this.state;
    return (
      <div styleName="toast">
        {
          notices.map(notice => (
            <div styleName="toast_bg" key={notice.key}>
              <div styleName='toast_box'>
                {notice.type == 'success' && <span styleName={`${notice.type}_icon`} className='iconfont'>&#xe69e;</span>}
                {notice.type == 'error' &&<span styleName={`t${notice.type}_icon`} className='iconfont'>&#xe644;</span>}
                {notice.type == 'info' &&<span styleName={`${notice.type}_icon`} className='iconfont'>&#xe685;</span>}
                <span styleName='toast_text'>{notice.content}</span> 
              </div>
            </div>
          ))
        }
      </div>
    )
  }
}

export default CSSModules(MessageBox,style)