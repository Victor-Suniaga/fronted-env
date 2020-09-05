import { all } from 'redux-saga/effects';
import onGet from './get';

function* loanSagas() {
  yield all([
    onGet()
  ]);
}

export default loanSagas;
