import { all } from 'redux-saga/effects';
import authSagas from './auth/saga';
import paperSagas from './paperuploader/saga';
export default function* rootSaga(getState) {
  yield all([
    authSagas(),
    paperSagas(),
  ]);
}
