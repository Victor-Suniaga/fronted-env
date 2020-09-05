import { call, put, takeEvery } from 'redux-saga/effects';
import { searchReducer } from '../reducer/search.reducer';

import { get } from '../api';

function* getData(action: { payload: string, type:string }) {
  try {
    const result = yield call(() => get(action.payload));
    yield put(searchReducer.clean());
    yield put(searchReducer.getSuccess(result));
  } catch (err) {
    console.log(err);
  }
}

export default function* onGet() {
  yield takeEvery('searchReducer/get', getData);
}
