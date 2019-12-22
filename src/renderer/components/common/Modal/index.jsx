
import React, { useState } from 'react';
import CSSModules from 'react-css-modules';
import Button from '../Button';
import style from './index.less';

function Modal(props) {
//   const [visible, setVisible] = useState(true);
  return (
    <div>
      {props.visible === true
        ? (
          <div id="modal" className={ style.modal }>
            <div className={ style.modalContent }>
              <header className={ style.modalHeader }>
                <h4>模态框标题</h4>
                <span className={ style.close }>×</span>
              </header>
              <div className={ style.modalBody }>
                {/* <p>这是内容！</p> */}
                {React.Children.map(props.children, (item) => (<div>{item}</div>))}
              </div>
              <footer className={ style.modalFooter }>
                <Button id={ style.cancel }>{ props.cancleText }</Button>
                <div id={ style.sure }>{ props.okText }</div>
              </footer>
            </div>
          </div>
        ) : null}
    </div>

  );
}

export default CSSModules(Modal, style);
