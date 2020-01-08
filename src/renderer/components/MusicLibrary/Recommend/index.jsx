import React from 'react';
import CSSModules from 'react-css-modules';
import style from './index.less';
import RecommendSongs from './RecommendSongs';

function Recommend() {
  return (
    <div styleName="recommend">
      <RecommendSongs/>
    </div>
  );
}

export default CSSModules(Recommend, style);
