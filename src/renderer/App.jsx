import React, { useEffect } from 'react';
import Header from './components/common/Header';
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
    <div style={{overflow:'hidden',}}>
      <div style={{width:'15rem',float:'left'}}>
        <SiderBar/>
      </div>
      <div style={{width:'calc(100%-15rem)',float:'left'}}>
        {/*<Header/>*/}
        <Context/>
        <Footer/>
      </div>
    </div>
  );
}
