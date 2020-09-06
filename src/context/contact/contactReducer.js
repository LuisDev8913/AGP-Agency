import { SUBMIT_STATE, SUBMIT_CLEAR, SET_LOADING } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SUBMIT_STATE:
      return {
        ...state,
        submit: action.payload,
        loading: false,
      };
    case SUBMIT_CLEAR:
      return {
        ...state,
        submit: null,
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
