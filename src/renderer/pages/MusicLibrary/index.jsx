import React, { useEffect } from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
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
  // console.log(useSelector(state => state));

  return (
    <Page>
      <Banner imgList={ bannerList }/>
      <Recommend/>
    </Page>
  );
}

MusicLibrary.propTypes = {
  getBannerList: PropTypes.func.isRequired,
};

export default connect((state) => ({
  ...state,
}), musicLibraryActions)(CSSModules(MusicLibrary, style));
