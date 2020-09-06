import { GET_ALL_LINKS, GET_BEST_LINKS, SET_LOADING } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_ALL_LINKS:
      return {
        ...state,
        portfolio: action.payload,
        loading: false,
      };
    case GET_BEST_LINKS:
      return {
        ...state,
        portfolio: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
