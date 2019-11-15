import React, { useState, useEffect } from 'react';
import CSSModules from 'react-css-modules';
import style from './index.less';

function Banner() {
  
  useEffect(()=>{
    
  })
  // <img class="d-flag" src="http://p1.music.126.net/MiWjEEQbjo1MWRKOUCSkfg==/109951164481371617.jpg?imageView&amp;quality=89" id="auto-id-bOVHL3bG1JP8E1zD" style="transition: opacity 1s ease-in 0s; opacity: 0.2;">
  // <img class="d-flag" src="http://p1.music.126.net/MiWjEEQbjo1MWRKOUCSkfg==/109951164481371617.jpg?imageView&amp;quality=89" id="auto-id-bOVHL3bG1JP8E1zD" style="transition: opacity 1s ease-out 0s; opacity: 1;">
  // <img class="d-flag" src="http://p1.music.126.net/MiWjEEQbjo1MWRKOUCSkfg==/109951164481371617.jpg?imageView&amp;quality=89" id="auto-id-bOVHL3bG1JP8E1zD" style="transition: none 0s ease 0s; opacity: 1;">
  return (
    <div styleName='banner'>
      banner
    </div>
  );
}

export default CSSModules(Banner,style);