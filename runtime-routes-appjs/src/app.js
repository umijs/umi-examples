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

  routes.forEach(element => {
    //add route
    serveRoutes.map(sr => {
      if (element.path === sr.path) {
        sr.addRoutes.map(srItem => {
          const newRoute = {
            path: srItem.path,
            component: require('./pages' + srItem.path).default,
          };
          element.routes && element.routes.unshift(newRoute);
        });
      }
    });
    //add auth
    Object.assign(element,authRoutes[element.path] || {})
    element.routes &&
      element.routes.forEach(route => {
        Object.assign(route,authRoutes[element.path] || {})
      });
  });
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