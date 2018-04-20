
export default (props) =>
  <div>
    <div>Header (layouts/index.js)</div>
    <hr />
    {
      props.children
    }
    <hr />
    <div>Footer (layouts/index.js)</div>
  </div>
