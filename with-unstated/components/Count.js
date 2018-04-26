import { Subscribe } from 'unstated';
import CounterContainer from '../containers/CounterContainer';

export default () =>
  <Subscribe to={[CounterContainer]}>
    {
      counter => (
        <>
          <h2>{counter.state.count}</h2>
          <div>
            <button onClick={counter.increment}>+</button>
            <button onClick={counter.decrement}>-</button>
          </div>
        </>
      )
    }
  </Subscribe>
