import actions from './actions';


const initState = {
  author: '',
  paper: ''
 };



export default function paperReducer(state = initState, action) {
  switch (action.type) {
    case actions.ADD_PAPER:  
      return { ...state, papers: action.papers };
    default:
      return state;
  }
}
