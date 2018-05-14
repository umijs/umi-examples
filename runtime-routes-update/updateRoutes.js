import remove from 'lodash.remove';

// TODO: fetch from document.domain
const currentDomain = 'a.localhost';
const excludeDomain = 'b.localhost';

export default (routes) => {
  patchRoutes(routes);
  return routes;
}

function patchRoutes(routes) {
  routes.forEach(patchRoute);
  remove(routes, route => {
    return route.path && route.path.indexOf(excludeDomain) > -1;
  });
}

function patchRoute(route) {
  if (route.path && route.path.indexOf(currentDomain) > -1) {
    route.path = route.path.replace(currentDomain, '');
  }
}
