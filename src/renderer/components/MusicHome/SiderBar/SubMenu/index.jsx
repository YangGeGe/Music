import React, { useState, useEffect } from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import style from './index.less';
import MenuItem from './MenuItem';

function SnbMenu(props) {
  const [listShow, changeListShow] = useState(false);
  useEffect(() => {

  });
  const { menuGroupKey, title, menuList } = props;
  const shrinkOrShow = () => {
    changeListShow(!listShow);
  };
  return (
    <>
      <div styleName="menuList" >
        {
          title && (
            <div styleName="listTitle" onClick={ shrinkOrShow }>
              <span className="iconfont">{listShow ? '\ue68d' : '\ue68f'}</span>{title}
            </div>
          )
        }
        {
          (listShow || !title) && (
            <div>
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
          )
        }
      </div>
    </>
  );
}
SnbMenu.propTypes = {
  menuList: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};
export default CSSModules(SnbMenu, style, { allowMultiple: true });
