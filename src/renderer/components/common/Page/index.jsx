import React from 'react';
import propTypes from 'prop-types';

function Page({
  children,
  style,
}) {
  return (
    <div style={ style || {
      padding: '10px 20px',
    } }
    >
      {children}
    </div>
  );
}

Page.propTypes = {
  children: propTypes.object.isRequired,
  style: propTypes.object,
};

Page.defaultProps = {
  style: {},
};

export default Page;
