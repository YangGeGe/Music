import React from 'react';
import CSSModules from 'react-css-modules';
import { useSelector } from 'react-redux';
import style from './index.less';
import Banner from '../../components/MusicLibrary/Banner';
import Recommend from '../../components/MusicLibrary/Recommend';

function MusicLibrary() {
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
      src: 'http://p1.music.126.net/WLlTKD0C9SUP6GYmGuEb4A==/109951164544988096.jpg?imageView&quality=89',
      id: 3,
      music: '桃花缘',
      singer: '王昕语',
    },
    {
      src: 'http://p1.music.126.net/cwosxc9o3m-QNkkBrYj_mw==/109951164545015991.jpg?imageView&quality=89',
      id: 4,
      music: '少年',
      singer: '周传雄',
    },
  ];
  console.log(useSelector(state => state.user));
  return (
    <>
      <Banner imgList={ imgList }/>
      <Recommend/>
    </>
  );
}

export default CSSModules(MusicLibrary, style);
