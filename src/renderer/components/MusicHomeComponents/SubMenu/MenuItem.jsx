import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import style from './MenuItem.less';

function MenuItem(props) {
  const [isChecked, setCheckend] = useState(false);
  const { item } = props;
  useEffect(() => {

  });
  const onClick = () => {
    setCheckend(!isChecked);
  };
  return (
    <>
      <div
        key={ item.icon }
        styleName="menuItem"
        onClick={ onClick }
        style={ {
          background: isChecked ? 'skyblue' : '',
          color: isChecked ? '#1890ff' : '',
          borderRight: isChecked ? '3px solid #1890ff' : '',
        } }
      >
        <span className="iconfont">{item.icon}</span> {item.name}
      </div>
    </>
  );
}
MenuItem.propTypes = {
  item: PropTypes.object.isRequired,
};
export default CSSModules(MenuItem, style);
