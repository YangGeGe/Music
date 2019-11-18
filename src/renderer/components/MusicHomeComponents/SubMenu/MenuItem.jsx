import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

function MenuItem(props) {
  useEffect(() => {

  });
  const { item } = props;
  return (
    <>
      <div key={ item.icon }> <span className="iconfont">{item.icon}</span> {item.name}</div>
    </>
  );
}
MenuItem.propTypes = {
  item: PropTypes.object.isRequired,
};
export default MenuItem;
