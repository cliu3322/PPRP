import axios from "axios";

const actions = {
  GET_PAPERS: "GET_PAPERS"
};

export const getPapers = () => dispatch => {
  axios
    .get("/api/getFileDetails")
    .then(res =>
      dispatch({
        type: actions.GET_PAPERS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: actions.GET_PAPERS,
        payload: null
      })
    );
};
