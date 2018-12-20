import { all, takeEvery, call } from 'redux-saga/effects';
import actions from './actions';
import axios from 'axios';

const onPostRequest = async (data) => {
  for (var value of data.values()) {
     console.log(value);
  }
  for (var key of data.keys()) {
   console.log(key);
}
  await axios.post('http://localhost:3000/api/uploadFile', data).then(res => res)
}

function* addPaper({payload}) {
  const { data } = payload;
  try {
    const addResult = yield call(
      onPostRequest,
      data
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
