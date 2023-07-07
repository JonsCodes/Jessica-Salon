import { combineReducers } from 'redux';
import salonReducer from './salonReducer';
// Import and combine additional reducers as needed

const rootReducer = combineReducers({
  salon: salonReducer,
  // Add additional reducer slices here
});

export default rootReducer;
