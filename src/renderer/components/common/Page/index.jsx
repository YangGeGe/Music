import React from 'react';
import propTypes from 'prop-types';

function Page({
  children,
  style,
}) {
  return (
    <div style={ Object.keys(style).length > 0 || {
      padding: '0 20px',
    } }
    >
      {children}
    </div>
  );
}

Page.propTypes = {
  children: propTypes.array.isRequired,
  style: propTypes.object,
};

Page.defaultProps = {
  style: {},
};

export default Page;
