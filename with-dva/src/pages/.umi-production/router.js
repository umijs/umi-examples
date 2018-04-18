import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';
import { routerRedux } from 'dva/router';



let Router = DefaultRouter;
const { ConnectedRouter } = routerRedux;
Router = ConnectedRouter;


const routes = [
  {
    "component": require('/Users/chencheng/Documents/Work/Misc/umi/examples/with-dva/src/layouts/index.js').default,
    "routes": [
      {
        "path": "/index.html",
        "exact": true,
        "component": require('../index/index.js').default
      },
      {
        "path": "/admin",
        "exact": true,
        "component": require('../admin.js').default
      },
      {
        "path": "/",
        "exact": true,
        "component": require('../index/index.js').default
      },
      {
        "path": "/list",
        "exact": false,
        "component": require('../list/_layout.js').default,
        "routes": [
          {
            "path": "/list/",
            "exact": true,
            "component": require('../list/index.js').default
          },
          {
            "path": "/list/list",
            "exact": true,
            "component": require('../list/list.js').default
          },
          {
            "path": "/list/search/",
            "exact": true,
            "component": require('../list/search/index.js').default
          }
        ]
      },
      {
        "path": "/login",
        "exact": true,
        "component": require('../login.js').default
      }
    ]
  }
];

export default function() {
  return (
<Router history={window.g_history}>
  { renderRoutes(routes) }
</Router>
  );
}
