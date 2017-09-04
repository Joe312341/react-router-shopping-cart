import { ADD_VEGETABLE, CLEAR_VEGETABLES } from './actions';

const initialState = {
  vegetables: []
};

export default function vegetablesReducer(state=initialState, action) {
  switch (action.type) {
    case ADD_VEGETABLE:
      return {
        ...state,
        vegetables: [ ...state.vegetables, action.vegetableName ]
      }
    case CLEAR_VEGETABLES:
      return {
        ...state,
        vegetables: []
      }
    default:
      return state;
  }
}
