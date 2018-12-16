import { all, takeEvery, put, call } from 'redux-saga/effects';
import actions from './actions';
import axios from 'axios';

const onPostRequest = async (paperData) => {
  console.log(paperData);
  await axios.post(`http://localhost:3000/api/uploadFile`, paperData)
    .then(res => res.json())
    .then(res => res)
    .catch(error => error);
  }

function* addPaper(paperData) {
  try {
    const addResult = yield call(
      onPostRequest,
      paperData
    );
    if (addResult.id) {
      yield put(
        actions.addpaperSuccess(
        )
      );
    } else {
      yield put(actions.addpaperSuccess());
    }
  } catch (error) {
    console.log(error);
  }
}
export default function* rootSaga() {
  yield all([takeEvery(actions.ADD_PAPER, addPaper)]);
}
