import React, { Suspense, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import router from './router';
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
    <Router>
      <Suspense fallback={ <div>Loading</div> }>
        {
        router.map(({ path, componentName, exact = true, routes = [], key }) => {
          const Tag = componentName;
          return (
            <Route
              exact={ exact }
              key={ key }
              path={ path }
              render={ props => (
                <Tag { ...props } routes={ routes }/>
              ) }
            />
          );
        })
      }
      </Suspense>
    </Router>
  );
}
