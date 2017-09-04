import { ADD_FRUIT, CLEAR_FRUITS } from './actions';

const initialState = {
  fruits: ['Apples']
};

export default function fruitsReducer(state=initialState, action) {
  switch (action.type) {
    case ADD_FRUIT:
      return {
        ...state,
        fruits: [...state.fruits, action.fruitName]
      }
    case CLEAR_FRUITS:
      return {
        ...state,
        fruits: []
      }
    default:
      return state;
  }
}
