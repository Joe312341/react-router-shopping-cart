import { combineReducers } from 'redux';
import fruitsReducer from './containers/Fruits/reducer';
import vegetablesReducer from './containers/Vegetables/reducer';

const rootReducer = combineReducers({
    fruitsReducer,
    vegetablesReducer
});

export default rootReducer;
