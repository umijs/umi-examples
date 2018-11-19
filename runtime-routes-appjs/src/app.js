import fetch from 'dva/fetch';

export const dva = {
  config: {
    onError(err) {
      err.preventDefault();
      console.error(err.message);
    },
  },
};

let authRoutes = null;
let serveRoutes = null;

export function patchRoutes(routes) {
  for (let key = 0; key < routes.length; key++) {
    //add route
    serveRoutes.map(sr => {
      if (routes[key].path === sr.path) {
        sr.addRoutes.map(srItem => {
          const newRoute = {
            path: srItem.path,
            component: require('./pages' + srItem.path).default,
          };
          routes[key].routes && routes[key].routes.unshift(newRoute);
        });
      }
    });
    //add auth
    routes[key] = {
      ...routes[key],
      ...(authRoutes[routes[key].path] || {}),
    };
    routes[key].routes = routes[key].routes
      ? routes[key].routes.map(route => {
          route = {
            ...route,
            ...(authRoutes[routes[key].path] || {}),
          };
          return route;
        })
      : routes[key].routes;
  }
  window.g_routes = routes;
}

export function render(oldRender) {
  fetch('/api/auth_routes')
    .then(res => res.json())
    .then(ret => {
      authRoutes = ret;
      fetch('/api/routes')
        .then(res => res.json())
        .then(data => {
          serveRoutes = data;
          oldRender();
        });
    });
}
