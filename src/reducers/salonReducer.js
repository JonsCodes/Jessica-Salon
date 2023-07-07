import { FETCH_SALON_DATA } from '../actions/types';

const initialState = {
  salonData: null,
  // Add more initial state properties as needed
};

const salonReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SALON_DATA:
      return {
        ...state,
        salonData: action.payload,
      };
    // Add additional cases as needed
    default:
      return state;
  }
};

export default salonReducer;
