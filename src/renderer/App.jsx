import React, { useEffect } from 'react';
import HomePage from './components/home';
// import Header from './components/Header';
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
    <>
      {/* <Header/> */}
      <HomePage/>
    </>
  );
}
