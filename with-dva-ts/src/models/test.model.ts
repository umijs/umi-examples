import { createActionCreatorFactory, Model, Saga, EffectsCommandMap, /* DefaultSaga */ } from 'dva';
/* tslint:disable no-console */
// import factory from 'typescript-fsa';

const _ = createActionCreatorFactory('testMe');

// NOTE: you have to guarantee object key is the same with actionType
export const effectAction = {
   fetch: _<{ id: string }>('fetch'),
   query: _('query'),
   queryDebounced: _('queryDebounced'),
   pollSth: _.poll<{ key: string | number }>('pollSth'),
};

// NOTE: you have to guarantee object key is the same with actionType
export const reducerAction = {
  append: _<{ countNew: number, id: string }>('append'),
};

// NOTE: you have to guarantee object key is the same with actionType
export const notBoundAction = {
  sayHi: _<{ hiFrom: string }>('sayHi'),
};

type ModelState = {
  seq: Array<{ id: string, count: number }>;
};

const model:Model<ModelState, typeof effectAction, typeof reducerAction> = {
  state: {
    seq: [],
  },
  namespace: _.namespace,
  reducers: {
    append(state, { id, countNew }) {
      return {
        ...state,
        seq: state.seq.concat({ id, count: countNew }),
      };
    },
  },

  effects: {
    *fetch({ id }, { delay }) {
      console.log(`fetch effect action id: ${id}`);
      yield delay(1000);
      console.log('fetch effect executed');
    },

    query: [function* ({  }, { delay }) {
      yield delay(2000);
      console.log('query effect executed');
    }, { type: 'takeLatest' }],

    queryDebounced: [function* ({  }, { delay }) {
      yield delay(2000);
      console.log('queryDebounced executed');
    }, { type: 'debounce', ms: 300 }],

    pollSth: [function * ({ key }, { put }) {
      console.log(`pollSth key: ${key}`);
      yield put(reducerAction.append({ id: 'haha', countNew: 1 }));
    }, { type: 'poll', delay: 5000 }],
  },
  watchers: {
    *sayHiWatcher({ delay, take }) {
      while (true) {
        const action:ReturnType<typeof notBoundAction.sayHi> = yield take(notBoundAction.sayHi);
        const { hiFrom } = action;
        yield delay(1000);
        console.log(`someWatcher executed, hiFrom: ${hiFrom}`);
      }
    },
  },
};

export default model;
