import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import style from './index.less';

function Tag(props) {
  const { closable, children, onClick, onClose } = props;
  return (
    <div
      className={ style.tag }
      onClick={ onClick }
    >
      <span>{children}</span>
      { closable && <span className="iconfont" onClick={ onClose }>&#xe6e9;</span> }
    </div>
  );
}

Tag.propTypes = {
  closable: PropTypes.bool,
  children: PropTypes.string,
  onClick: PropTypes.func,
  onClose: PropTypes.func,
};
Tag.defaultProps = {
  closable: false,
  children: '',
  onClick: PropTypes.func,
  onClose: PropTypes.func,
};

export default CSSModules(Tag, style);
