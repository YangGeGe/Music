import React from 'react';
import CSSModules from 'react-css-modules';
import { useSelector } from 'react-redux';
import style from './index.less';
import Banner from '../../components/MusicLibrary/Banner';

function MusicLibrary(props) {
  console.log(props);
  const imgList = [
    {
      src: 'http://p1.music.126.net/lWe5sGr3IJecg-l9d6IZVA==/109951164496424429.jpg?imageView&quality=89',
      id: 1,
      music: 'Love poem',
      singer: 'IU',
    },
    {
      src: 'http://p1.music.126.net/a3qkh5MtI7u2j8-vmPfxyA==/109951164509400719.jpg?imageView&quality=89',
      id: 2,
      music: 'Frozen 2 (Mandarin Original Motion Picture Soundtrack)',
      singer: 'Various Artists',
    },
    {
      src: 'http://p1.music.126.net/6D1KIsi1ZfCkj1Iq85l1Vw==/109951164509380880.jpg?imageView&quality=89',
      id: 3,
      music: '捞月摇',
      singer: '不才',
    },
    {
      src: 'http://p1.music.126.net/64wqw0V8lYY4KGTsxjaYOA==/109951164509387752.jpg?imageView&quality=89',
      id: 4,
      music: '爱你不是两三天',
      singer: '焦迈奇',
    },
  ];
  console.log(useSelector(state => state.num));
  return (
    <div>
      <Banner imgList={ imgList }/>
    </div>
  );
}

export default CSSModules(MusicLibrary, style);
