import { call, put, takeEvery } from 'redux-saga/effects';
import * as types from '../constants/actions';
import {  getMarkets} from '../api/market';
import * as actions from '../actions/market';
function* fetchMarket() {
  
    try {
      const data = yield call(getMarkets);
      // const address ="https://localbitcoins.com/buy-bitcoins-online/pk/pakistan/national-bank-transfer/"
      yield put(actions.successMarket(data));
    } catch (e) {
      yield put(actions.fetchMarket({}));
    }
  }
  
export function* fetchMarketSaga() {
  yield takeEvery(types.FETCH_MARKET, fetchMarket);
}


