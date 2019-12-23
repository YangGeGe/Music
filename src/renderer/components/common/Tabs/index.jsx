import React, { useState } from 'react';
import CSSModules from 'react-css-modules';
import style from './index.less';

function Tabs(props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const checkTitle = (index) => (index === currentIndex ? 'tabTitleActive' : 'tabTitle');

  const checkItem = (index) => (index === currentIndex ? 'tabItemShow' : 'tabItem');

  return (
    <div>
      <div styleName="tabTitleWrap">
        {
          React.Children.map(props.children, (element, index) => (
            <div
              onClick={ () => { setCurrentIndex(index); } }
              styleName="tabTitle"
              style={ {
                borderBottom: checkTitle(index) === 'tabTitleActive' ? '2px solid blue' : null,
                paddingBottom: checkTitle(index) === 'tabTitleActive' ? '5px' : null,
                color: checkTitle(index) === 'tabTitleActive' ? 'blue' : null,
              } }
            >{ element.props.name }
            </div>
          ))
        }
      </div>
      <div styleName="tabItemWrap">
        {
          React.Children.map(props.children, (element, index) => (
            <div styleName="tabItem" style={ { display: checkItem(index) === 'tabItemShow' ? 'block' : 'none' } }>{ element }</div>
          ))
        }
      </div>
    </div>
  );
}

export default CSSModules(Tabs, style);
