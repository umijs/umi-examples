import Breadcrumbs from './Breadcrumbs';

export default ({ children }) => {
  return (
    <div>
      <div>Header (layouts/index.js)</div>
      <hr/>
      <Breadcrumbs />
      <hr/>
      {
        children
      }
      <hr/>
      <div>Footer (layouts/index.js)</div>
    </div>
  );
}
