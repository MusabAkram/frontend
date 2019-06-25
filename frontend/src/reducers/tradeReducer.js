import queryString from 'query-string';

import {
  FETCH_MARKET_DATA,
  FETCH_TICKER_DATA,
  SUCCESS_TRADE_DATA,
} from '../constants/actions';

const initState = {  
    currencies:[],
    balance:[],
    marketData:[],
    tickerData:null,
}

function tradeReducer(state = initState, action) {
  switch (action.type) {
    case FETCH_MARKET_DATA: {
      return { ...state, marketData:action.data.marketData };
    }
    case FETCH_TICKER_DATA: {
        return { ...state, tickerData:action.data.tickerData };
    }

    case SUCCESS_TRADE_DATA: {
        state.marketData = action.data.marketData;
        state.tickerData = action.data.tickerData;
        state.currencies = action.data.currencies;
        // break;
        return { ...state ,marketData : action.data.marketData, tickerData : action.data.tickerData,currencies : action.data.currencies};    
    }

    case '@@router/LOCATION_CHANGE': {
    //   return {
    //     ...state,
    //     // activeWallet: queryString.parse(action.payload.location.search).currency
    //   };
    }
    default: {
      return state;
    }
  }
}

export default tradeReducer;
