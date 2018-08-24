/**
 * Routes:
 *   - ./routes/PrivateRoute.js
 */
import router from 'umi/router';

export default () =>
  <>
    <h1>/list</h1>
    <button onClick={() => {
      router.push('/list');
    }}>test push to self</button>
  </>
