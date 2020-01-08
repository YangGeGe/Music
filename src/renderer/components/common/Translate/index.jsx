import React from 'react';
import CSSModules from 'react-css-modules';
import propTypes from 'prop-types';
import styles from './index.less';

function Translate({
  children,
  style,
  itemStyle,
}) {
  const width = (itemStyle.width + itemStyle.paddingRight) * children.length;
  return (
    <div style={ style } styleName="wall">
      <div styleName="contentWrap" style={ { width: `${width / 16}rem`, height: style.height } }>
        {children}
      </div>
    </div>
  );
}

Translate.propTypes = {
  children: propTypes.array.isRequired,
  style: propTypes.object.isRequired,
  itemStyle: propTypes.object.isRequired,
};

export default CSSModules(Translate, styles);
