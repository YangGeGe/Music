import React, { useEffect } from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import style from './index.less';
import MenuItem from './MenuItem';

function SnbMenu(props) {
  const { menuGroupKey, menuList, title } = props;
  useEffect(() => {
    menuList.map(item => {
      item.isChoise = false;
    });
  });
  return (
    <div styleName="menuList" >
      {
        title && <div styleName="listTitle">{title}</div>
      }
      {
        menuList.map((item, index) => (
          <MenuItem
            key={ `${menuGroupKey}-${index}` }
            item={ item }
            itemKey={ `${menuGroupKey}-${index}` }
          />
        ))
      }
    </div>
  );
}
SnbMenu.propTypes = {
  menuList: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  menuGroupKey: PropTypes.any.isRequired,
};

export default CSSModules(SnbMenu, style, { allowMultiple: true });
