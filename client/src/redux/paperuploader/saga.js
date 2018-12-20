import { all, takeEvery, call } from 'redux-saga/effects';
import actions from './actions';
import axios from 'axios';

const onPostRequest = async (data) => {
  for (var key of data.data.keys()) {
     console.log(key);
  }
  await axios.post('http://localhost:3000/api/uploadFile', data.data).then((res) => {
    console.log(res)
  })
}

function* addPaper(paperData) {
  try {
    const addResult = yield call(
      onPostRequest,
      paperData
    );
    console.log(addResult)
    // if (addResult) {
    //   console.log(addResult)
    // } else {
    //   yield put(actions.addpaperSuccess());
    // }
  } catch (error) {
    console.log(error);
  }
}
export default function* rootSaga() {
  yield all([takeEvery(actions.ADD_PAPER, addPaper)]);
}
