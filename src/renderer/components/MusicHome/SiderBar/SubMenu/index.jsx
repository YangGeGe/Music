import React, { useState } from 'react';
import CSSModules from 'react-css-modules';
import style from './index.less';
import { Modular } from '../../../constraint';
import MenuItem from './MenuItem';

function SnbMenu() {
  const [composeKey, setkeys] = useState('');


  const onClick = (groupKey, index) => {
    setkeys(`${groupKey + index}`);
  };

  return (
    <>
      {
        Modular.map(item => (
          <div
            key={ item.key }
            styleName="menuList"
          >
            { item.title && <div styleName="listTitle">{item.title}</div> }
            {
              item.modular.map((ele, index) => (
                <MenuItem
                  key={ ele.name }
                  composeKey={ composeKey }
                  item={ ele }
                  menuGroupKey={ item.key }
                  i={ index }
                  onClick={ () => { onClick(item.key, index); } }
                />
              ))
            }
          </div>
        ))
      }
    </>
  );
}

export default CSSModules(SnbMenu, style, { allowMultiple: true });
