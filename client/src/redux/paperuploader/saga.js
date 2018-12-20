import { all, takeEvery, call } from 'redux-saga/effects';
import actions from './actions';
import axios from 'axios';
import { delay } from 'redux-saga';

const onPostRequest = async (data) => {
  for (var value of data.values()) {
     console.log(value);
  }
  for (var key of data.keys()) {
   console.log(key);
  }
  //  console.log('onPostRequest')
  return axios.post('http://localhost:3000/api/uploadFile', data)
}

function* addPaper({payload}) {

  const { data } = payload;
  try {
    const addResult = yield call(
      onPostRequest,
      data
    );
    //yield delay(10000)
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
