import React from 'react';
import SiderBar from '../../components/common/SiderBar';
import Context from '../../components/common/Context';
import Footer from '../../components/common/Footer';

export default function MusicHome() {
  return (
    <div className="app">
      <div className="sidemenu">
        111
        <SiderBar/>
      </div>
      <div className="infos">
        <Context/>
        <Footer/>
      </div>
    </div>
  );
}
