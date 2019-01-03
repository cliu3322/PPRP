import { all, takeEvery, call, put } from "redux-saga/effects";
import actions from "./actions";
import axios from "axios";

const onGetRequest = async () => {
  return axios.get("http://localhost:3000/api/getFileDetails");
};

function* getPapers() {;

  try {
    const getResult = yield call(onGetRequest);
    //console.log('result1',getResult.data.allFilesDetail);
    yield put({
      type: actions.UPDATE_PAPERLIST,
      paperlist1:getResult.data.allFilesDetail
    });

  } catch (error) {
    console.log(error);
  }
}
export default function* rootSaga() {
  yield all([takeEvery(actions.GET_PAPERLIST, getPapers)]);
}
