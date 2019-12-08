import React, { useEffect } from './node_modules/react';
import CSSModules from './node_modules/react-css-modules';
import style from './index.less';

function History(props) {
  useEffect(() => {

  });

  return (
    <div styleName="history" style={ { display: props.visible ? 'block' : 'none' } }>
      {props.content}
    </div>
  );
}

export default CSSModules(History, style);
