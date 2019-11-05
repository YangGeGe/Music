import React, { useState } from 'react';
import style from './index.less';

function Search(props) {
  return (
    <div className={ style.search }>
      <input
        className={ style.input }
        placeholder="搜索"
      />
      <span className="iconfont">&#xe800;</span>
    </div>
  );
}

export default Search;
