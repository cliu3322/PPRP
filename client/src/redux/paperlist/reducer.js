import actions from "./actions";

const initState ={
  paperlist: [],
};

export default function listReducer(state = initState, action) {
  switch (action.type) {
    case actions.UPDATE_PAPERLIST:
      return {
        ...state,
        paperlist:action.paperlist1

       };
    default:
      return state;
  }
}
