import actions from "./actions";

const initState = {
  author: "",
  paper: "",
  abstract: "",
  subject: "",
  source: "",
  reference_number: "",
  method: ""
};

export default function listReducer(state = initState, action) {
  switch (action.type) {
    case actions.GET_PAPERS:
      return { ...state, author: action.author };
    default:
      return state;
  }
}
