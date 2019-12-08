import React, { Suspense, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
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
  const findIndexRouter = (routers) => {
    let indexRoute = '/';
    (function recursion(routes) {
      for (let i = 0; i < routes.length; i++) {
        if (routes[i].indexRouter) {
          indexRoute = routes[i].path;
        }
        if (routes[i].routes) {
          recursion(routes[i].routes);
        }
      }
    }(routers));
    return indexRoute;
  };
  return (
    <Router>
      <Suspense fallback={ <div>Loading</div> }>
        <Switch>
          <Redirect exact from="/" to={ findIndexRouter(router) }/>
          {
            router.map(({ path, componentName, routes = [], key }) => {
              const Tag = componentName;
              return (
                <Route
                  key={ key }
                  path={ path }
                  render={ props => (
                    <Tag { ...props } routes={ routes }/>
                  ) }
                />
              );
            })
          }
        </Switch>
      </Suspense>
    </Router>
  );
}
