import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import style from './Time.less';
import useTime from '../../../hooks/TimeHook';

function Time({
  time,
}) {
  const minute = useTime(time);
  return (
    <span styleName="time">
      { minute }
    </span>
  );
}

Time.propTypes = {
  time: PropTypes.number,
};

Time.defaultProps = {
  time: 0,
};

export default CSSModules(Time, style);
