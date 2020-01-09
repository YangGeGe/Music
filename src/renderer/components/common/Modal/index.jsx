import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import Button from '../Button';
import style from './index.less';

function Modal({
  visible,
  children,
  cancleText,
  okText,
}) {
//   const [visible, setVisible] = useState(true);
  return (
    <div>
      {visible
        ? (
          <div id="modal" className={ style.modal }>
            <div className={ style.modalContent }>
              <header className={ style.modalHeader }>
                <h4>模态框标题</h4>
                <span className={ style.close }>×</span>
              </header>
              <div className={ style.modalBody }>
                {/* <p>这是内容！</p> */}
                {React.Children.map(children, (item) => (<div>{item}</div>))}
              </div>
              <footer className={ style.modalFooter }>
                <Button id={ style.cancel }>{ cancleText }</Button>
                <div id={ style.sure }>{ okText }</div>
              </footer>
            </div>
          </div>
        ) : null}
    </div>

  );
}

Modal.propTypes = {
  okText: PropTypes.string,
  cancleText: PropTypes.string,
  visible: PropTypes.bool.isRequired,
  children: PropTypes.array.isRequired,
};

Modal.defaultProps = {
  okText: '确认',
  cancleText: '取消',
};

export default CSSModules(Modal, style);
