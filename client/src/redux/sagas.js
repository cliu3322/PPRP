import { all } from 'redux-saga/effects';
import authSagas from './auth/saga';
import paperSagas from './paperuploader/saga';
import paperListSagas from './paperlist/saga';
export default function* rootSaga(getState) {
  yield all([
    authSagas(),
    paperSagas(),
    paperListSagas(),
  ]);
}
