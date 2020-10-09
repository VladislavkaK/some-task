import { takeLatest, call, put, fork } from 'redux-saga/effects';
import { getUnicorns, editUnicorns } from './services';
import {
  GET_DATA_UNICORNS_REQUESTED,
  GET_DATA_UNICORNS_SUCCEEDED,
  GET_DATA_UNICORNS_FAILED,
  EDIT_DATA_UNICORNS_REQUESTED,
  EDIT_DATA_UNICORNS_FAILED,
  EDIT_DATA_UNICORNS_SUCCEEDED
} from './constants';

export function* workerGetUnicornsData() {
  try {
    const response = yield call(getUnicorns);
    yield put({ type: GET_DATA_UNICORNS_SUCCEEDED, response });
  } catch (error) {
    yield put({ type: GET_DATA_UNICORNS_FAILED, error });
  }
}

export function* workerEditUnicornsData({ payload }: any) {
  try {
    const response = yield call(editUnicorns, payload);
    yield put({ type: EDIT_DATA_UNICORNS_SUCCEEDED, response, payload });
  } catch (error) {
    yield put({ type: EDIT_DATA_UNICORNS_FAILED, error });
  }
}

export function* watcherGetUnicornsData() {
  yield takeLatest(GET_DATA_UNICORNS_REQUESTED, workerGetUnicornsData);
}

export function* watcherEditUnicornsData() {
  yield takeLatest(EDIT_DATA_UNICORNS_REQUESTED, workerEditUnicornsData);
}

export const unicornSagas = [
  fork(watcherGetUnicornsData),
  fork(watcherEditUnicornsData),
];