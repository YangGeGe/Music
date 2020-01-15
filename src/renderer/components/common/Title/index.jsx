import React from 'react';
import propTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import { Link } from 'react-router-dom';
import {
  TITLE_ICON,
} from '../constraint';
import styles from './index.less';

/**
 * @description: 段落标题组件
 * @param {String} title 标题
 * @param {Boolean} mode 启用滑动展示
 * @param {Object} style 定制样式
 * @param {String} link 跳转路径
 * @param {Function} clickLeft
 * @param {Function} clickRight
 * @return
 */
function Title({
  title,
  mode,
  style,
  link,
  clickLeft,
  clickRight,
}) {
  return (
    <div styleName="wrap" style={ style }>
      <h2 styleName="title">{title}</h2>
      {
        !mode
          ? (
            <Link to={ link } styleName="more">
              更多&gt;
            </Link>
          )
          : (
            <div styleName="buttonGroup">
              <span onClick={ clickLeft() }>
                <i className="iconfont">{TITLE_ICON.left}</i>
              </span>
              <span onClick={ clickRight() }>
                <i className="iconfont">{TITLE_ICON.right}</i>
              </span>
            </div>
          )
      }
    </div>
  );
}

Title.propTypes = {
  title: propTypes.string.isRequired,
  mode: propTypes.bool,
  style: propTypes.object,
  link: propTypes.string,
  clickRight: propTypes.func,
  clickLeft: propTypes.func,
};

Title.defaultProps = {
  style: {},
  mode: false,
  link: '',
  clickRight: () => {},
  clickLeft: () => {},
};

export default CSSModules(Title, styles);
