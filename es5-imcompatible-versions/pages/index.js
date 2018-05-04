import qs from 'query-string';

export default () =>
  <h1>Index Page {qs.stringify({ a: 'b' })}</h1>

