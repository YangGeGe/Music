import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import style from './index.less';

function Recommend() {
  return (
    <div>111</div>
  );
}

Recommend.propTypes = {
  imgList: PropTypes.array.isRequired,
};

export default CSSModules(Recommend, style);
