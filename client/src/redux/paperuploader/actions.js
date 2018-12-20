const actions = {
  ADD_PAPER: 'ADD_PAPER',
  YOUTUBE_SUCCESS_RESULT: 'YOUTUBE_SUCCESS_RESULT',

  addPaper: data => {
    return (dispatch, getState) => {
      //const papers = [paper, ...getState().Paper];
      dispatch({
        type: actions.ADD_PAPER,
        payload: {data}
      });
    };
  },

};
export default actions;
