import {
    FETCH_TRADE_DATA,
    FETCH_MARKET_DATA,
    SUCCESS_TRADE_DATA,
    FAIL_TRADE_DATA,
  } from '../constants/actions';
  
  export const fetchTradeData = () => {
    return { type: FETCH_TRADE_DATA };
  };
  
  export const fetchMarketData = data => {
    return { type: FETCH_MARKET_DATA };
  };

  export const successTradeData = data => {
    return { type:SUCCESS_TRADE_DATA , data:data};
  };
  
  export const failTradeData = () =>{
    return { type: FAIL_TRADE_DATA}
  }
  