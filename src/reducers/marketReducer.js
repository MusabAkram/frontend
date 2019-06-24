import {
    FETCH_MARKET, SUCCESS_MARKET, FAIL_MARKET
  } from '../constants/actions';
  
  const initState = {
    isFetching: false,
    deposits: [],
    coinValue: [],
    error: false,
  };
  
  function marketReducer(state = initState, action) {
    switch (action.type) {
      case FETCH_MARKET: {
        return { ...state, isFetching: true };
      }
      case SUCCESS_MARKET: {
        return { ...state, coinValue: action.payload, isFetching: false };
      }
      case FAIL_MARKET: {
        return { ...state, coinValue: {}, isFetching: false };
      }
      default: {
        return state;
      }
    }
  }
  
  export default marketReducer;
  