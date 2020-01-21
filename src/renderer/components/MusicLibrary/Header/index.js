import React, { useState, useEffect } from 'react';
import CSSModules from 'react-css-modules';
import style from './index.less';
import Search from '../../common/Search';
import History from '../../common/Search/history';

function Header() {
  // const headerList = ['个人推荐', '歌单', '主播电台', '排行榜', '歌手', '最新音乐'];
  const headerList = [];
  const [showHistory, setShow] = useState(false); // 展示搜索历史
  const [nowClick, setClick] = useState(false); // 当前点击是历史node
  const [historyIsSearch, setIsSearch] = useState(false); // 搜索框发生改变以后显示
  const [showClose, setClose] = useState(false); // 搜索框关闭icon
  const [showValue, setValue] = useState(''); // 搜索框value

  const handleClick = e => {
    const classList = ['history', 'defaluteSpan', 'input', 'searchListTitle', 'defaluteTitle', 'defaluteSpanList', 'defaluteClear'];
    const node = e.target;
    if (node.nodeName !== '#document' && node.className && typeof node.className === 'string') {
      if (classList.some(item => node.className.indexOf(item) > -1)) {
        return setClick(true);
      }
    }
    setClick(false);
  };

  useEffect(() => {
    document.addEventListener('click', handleClick, true);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  });

  const onBlur = () => {

  };

  const onFocus = () => {
    setShow(true);
  };

  const onKeyDown = value => {
    // console.log(value);
  };

  const onChange = e => {
    setValue(e.target.value);
    setIsSearch(false);
    setClose(false);
    if (e.target.value) {
      setIsSearch(true);
      setClose(true);
    }
  };

  const clearValue = () => {
    setValue('');
    setIsSearch(false);
    setClose(false);
    setShow(false);
  };

  return (
    <div className={ style.header }>
      {
        headerList.length > 0 && headerList.map(item => (
          <span key={ item }>{ item }</span>
        ))
      }
      <Search
        onBlur={ onBlur }
        onFocus={ onFocus }
        onKeyDown={ onKeyDown }
        onChange={ onChange }
        showClose={ showClose }
        value={ showValue }
        clearValue={ clearValue }
      />
      <History
        visible={ showHistory && nowClick }
        historyIsSearch={ historyIsSearch }
      />
    </div>
  );
}

export default CSSModules(Header, style);
