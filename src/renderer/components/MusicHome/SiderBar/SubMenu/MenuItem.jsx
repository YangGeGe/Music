import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import style from './MenuItem.less';

function MenuItem(props) {
  const { menuGroupKey, item, composeKey, i, onClick } = props;
  useEffect(() => {
  });
  return (
    <div
      styleName="menuItem"
      onClick={ onClick }
      style={ {
        color: composeKey === (menuGroupKey + i) ? 'white' : '',
        borderRight: composeKey === (menuGroupKey + i) ? '3px solid white' : '',
      } }
    >
      <span className="iconfont">{item.icon}</span> {item.name}
    </div>
  );
}
MenuItem.propTypes = {
  item: PropTypes.object.isRequired,
  menuGroupKey: PropTypes.string.isRequired,
  composeKey: PropTypes.string.isRequired,
  i: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default CSSModules(MenuItem, style, { allowMultiple: true });
