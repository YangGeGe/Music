import React from 'react';
import CSSModules from 'react-css-modules';
import style from './index.less';
import Title from '../../../common/Title';
import Translate from '../../../common/Translate';
import SongCard from './SongCard';

function RecommendSongs() {
  return (
    <div styleName="recommendSongs">
      <Title title="为你推荐" mode/>
      <Translate
        itemStyle={ {
          width: 131,
          paddingRight: 15,
        } }
        style={ {
          height: `${150 / 16}rem`,
        } }
      >
        <SongCard/>
        <SongCard/>
        <SongCard/>
        <SongCard/>
        <SongCard/>
        <SongCard/>
        <SongCard/>
        <SongCard/>
        <SongCard/>
        <SongCard/>
      </Translate>
    </div>
  );
}

export default CSSModules(RecommendSongs, style);
