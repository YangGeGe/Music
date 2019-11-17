import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

function SiderBarMenuItem(props) {
  useEffect(() => {

  });
  const { item } = props;
  return (
    <>
      <div key={ item.icon }> <span className="iconfont">{item.icon}</span> {item.name}</div>
    </>
  );
}
SiderBarMenuItem.propTypes = {
  item: PropTypes.object.isRequired,
};
export default SiderBarMenuItem;
