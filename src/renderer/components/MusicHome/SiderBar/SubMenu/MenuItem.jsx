import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import style from './MenuItem.less';

function MenuItem(props) {
  const [isChecked, setCheckend] = useState(false);
  const { itemKey, item } = props;
  useEffect(() => {
  });
  const onClick = () => {
    setCheckend(!isChecked);
    // console.log(itemKey);
  };
  return (
    <>
      <div
        key={ itemKey }
        styleName="menuItem"
        onClick={ onClick }
        style={ {
          color: isChecked ? 'white' : '',
          borderRight: isChecked ? '3px solid white' : '',
        } }
      >
        <span className="iconfont">{item.icon}</span> {item.name}
      </div>
    </>
  );
}
MenuItem.propTypes = {
  item: PropTypes.object.isRequired,
  itemKey: PropTypes.string.isRequired,
};
export default CSSModules(MenuItem, style, { allowMultiple: true });
