import React, { useEffect } from 'react';
import CSSModules from 'react-css-modules';
import style from './index.less';

function Banner() {
  useEffect(() => {

  });
  return (
    <div>
      <img src="http://p1.music.126.net/sBY7Tv-6ny77Gdk8vI_3fQ==/109951164488075818.jpg?imageView&quality=89" alt=""/>
    </div>
  );
}

export default CSSModules(Banner, style);
