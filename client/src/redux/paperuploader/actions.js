const actions = {
  ADD_PAPER: 'ADD_PAPER',
  YOUTUBE_SUCCESS_RESULT: 'YOUTUBE_SUCCESS_RESULT',

  addPaper: paper => {
    return (dispatch, getState) => {
      //const papers = [paper, ...getState().Paper];
      dispatch({
        type: actions.ADD_PAPER,
        paper
      });
    };
  },

  youtubeSearchSuccess: (
    result,
    total_count,
    nextPageToken,
    prevPageToken
  ) => ({
    type: actions.YOUTUBE_SUCCESS_RESULT,
    result,
    total_count,
    nextPageToken,
    prevPageToken
  }),
};
export default actions;
