import { all, takeEvery, put, call } from 'redux-saga/effects';
import actions from './actions';
import axios from 'axios';

const onPostRequest = async (data) => {
  await axios.post('http://localhost:3000/api/uploadFile', data.data).then((response) => {
    console.log(response)
  })
}

function* addPaper(paperData) {
  try {
    const addResult = yield call(
      onPostRequest,
      paperData
    );
    console.log(addResult)
    if (addResult) {
      console.log(addResult)
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
