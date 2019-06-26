import { FETCH_MARKET, SUCCESS_MARKET, FAIL_MARKET } from '../constants/actions';

export const fetchMarket = () => {
  return { type: FETCH_MARKET };
};

export const successMarket = data => {
  return { type: SUCCESS_MARKET, payload: { data } };
};

export const failMarket = data => {
    return { type: FAIL_MARKET, payload: { data } };
  };

  