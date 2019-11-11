import React, { Component } from 'react'
import './index.css';

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
      <div className="toast">
        {
          notices.map(notice => (
            <div className="toast_bg" key={notice.key}>
              <div className='toast_box'>
                {notice.type == 'success' && <span className={`toast_icon iconfont ${notice.type}_icon`}>&#xe69e;</span>}
                {notice.type == 'error' &&<span className={`toast_icon iconfont ${notice.type}_icon`}>&#xe644;</span>}
                {notice.type == 'info' &&<span className={`toast_icon iconfont ${notice.type}_icon`}>&#xe685;</span>}
                <span className='toast_text'>{notice.content}</span> 
              </div>
            </div>
          ))
        }
      </div>
    )
  }
}

export default MessageBox