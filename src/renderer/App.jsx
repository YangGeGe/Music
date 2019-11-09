import React, { useEffect } from 'react';
// import Header from './components/common/Header';
import SiderBar from './components/common/SiderBar';
import Footer from './components/common/Footer';
import Context from './components/common/Context';
import './App.less';

export default function App() {
  useEffect(() => {
    (function () {
      function change() {
        document.documentElement.style.fontSize = `${document.documentElement.clientWidth * 16 / 1440}px`;
      }
      window.addEventListener('resize', change, false);
      change();
    }());
  });
  return (
    <div className='app'>
      <div className='sidemenu'>
        <SiderBar/>
      </div>
      <div className='infos'>
        {/* <Header/> */}
        <Context/>
        <Footer/>
      </div>
    </div>
  );
}
