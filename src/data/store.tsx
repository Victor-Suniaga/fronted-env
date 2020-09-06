import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createReducer from './reducers';
import { RootStore } from './reducers';

import rootSaga from './sideeffect'

const initialState: RootStore = {
  search: {},
} 
export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    createReducer(),
    initialState,
    applyMiddleware(sagaMiddleware)
  );

  sagaMiddleware.run(rootSaga);

  return store;
}
