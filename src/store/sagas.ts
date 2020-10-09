import { all } from 'redux-saga/effects';
import { unicornSagas } from './unicorn/saga';

export default function* sagas() {
  yield all([
    ...unicornSagas,
  ]);
}
