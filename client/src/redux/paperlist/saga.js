import { all, takeEvery, call } from "redux-saga/effects";
import actions from "./actions";
import axios from "axios";

const onGetRequest = async data => {
  // for (var value of data.values()) {
  //    console.log(value);
  // }
  // for (var key of data.keys()) {
  //  console.log(key);
  // }
  //  console.log('onPostRequest')
  return axios.get("http://localhost:3000/api/getFileDetails", data);
};

function* getPapers({ payload }) {
  const { data } = payload;
  try {
    const getResult = yield call(onGetRequest, data);
    //yield delay(10000)
    console.log(getResult);
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
  yield all([takeEvery(actions.GET_PAPERS, getPapers)]);
}
