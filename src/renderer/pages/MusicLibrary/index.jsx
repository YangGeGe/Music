import React, { useEffect } from 'react';
import CSSModules from 'react-css-modules';
import propTypes from 'prop-types';
import {
  useSelector,
  connect,
} from 'react-redux';
import musicLibraryActions from '../../store/actions/musicLibrary';
import style from './index.less';
import Banner from '../../components/MusicLibrary/Banner';
import Recommend from '../../components/MusicLibrary/Recommend';
import Page from '../../components/common/Page';

function MusicLibrary({
  getBannerList,
}) {
  const {
    bannerList,
  } = useSelector(state => state.musicLibrary);
  useEffect(() => {
    getBannerList({
      type: 0,
    });
  }, [getBannerList]);
  console.log(useSelector(state => state));

  return (
    <>
      <Banner imgList={ bannerList }/>
      <Page style={ { padding: '10px 0 0 20px' } }>
        <Recommend/>
      </Page>
    </>
  );
}

MusicLibrary.propTypes = {
  getBannerList: propTypes.func.isRequired,
};

export default connect((state) => ({
  ...state,
}), musicLibraryActions)(CSSModules(MusicLibrary, style));
