import React from 'react';
import PropTypes from 'prop-types';

function Page({
  children,
  // style,
}) {
  return (
    <div>
      {children}
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.array.isRequired,
  // style: PropTypes.object,
};

Page.defaultProps = {
  // style: {},
};

export default Page;
