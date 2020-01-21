import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import style from './history.less';

function History(props) {
  const { visible, historyIsSearch } = props;
  return (
    <div styleName="history" style={ { display: visible ? 'block' : 'none' } }>
      {!historyIsSearch && (
        <>
          <div className={ style.defaluteTitle }>热门搜索</div>
          <div className={ style.defaluteSpanList }>
            <span className={ style.defaluteSpan }>生命之河</span>
          </div>
          <div className={ style.defaluteTitle }>
            历史搜索<span className={ style.defaluteClear }>清空</span>
          </div>
          <div className={ style.defaluteSpanList }>
            <span className={ style.defaluteSpan }>等爱的玫瑰</span>
            <span className={ style.defaluteSpan }>等爱的玫瑰等爱的玫瑰</span>
            <span className={ style.defaluteSpan }>等爱的玫瑰</span>
            <span className={ style.defaluteSpan }>等爱的玫瑰</span>
            <span className={ style.defaluteSpan }>等爱的玫瑰</span>
            <span className={ style.defaluteSpan }>等爱的玫瑰</span>
          </div>
        </>
      )}
      {historyIsSearch && (
        <>
          <div styleName="searchListTitle"><span className="iconfont">&#xe624;</span>单曲</div>
          <div>
            <div className={ style.searchList }>生命之河生命之河生命之河生命之河生命之河生命之河生命之河生命之河生命之河</div>
          </div>
          <div styleName="searchListTitle"><span className="iconfont">&#xe615;</span>歌手</div>
          <div>
            <div className={ style.searchList }>生命之河</div>
          </div>
          <div styleName="searchListTitle"><span className="iconfont">&#xe61f;</span>专辑</div>
          <div>
            <div className={ style.searchList }>生命之河</div>
          </div>
          <div styleName="searchListTitle"><span className="iconfont">&#xe609;</span>视频</div>
          <div>
            <div className={ style.searchList }>生命之河</div>
          </div>
          <div styleName="searchListTitle"><span className="iconfont">&#xe731;</span>歌单</div>
          <div>
            <div className={ style.searchList }>生命之河</div>
          </div>
        </>
      )}
    </div>
  );
}
History.propTypes = {
  visible: PropTypes.bool,
  historyIsSearch: PropTypes.bool,
};
History.defaultProps = {
  visible: PropTypes.bool,
  historyIsSearch: PropTypes.bool,
};

export default CSSModules(History, style);
