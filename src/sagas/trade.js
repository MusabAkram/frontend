import { call, put, takeEvery, select } from 'redux-saga/effects';
import * as actions from '../actions/trade';
import * as types from '../constants/actions';
import { getMarketData, getTickerData, getTradeData } from '../api/trade';
import { push } from 'connected-react-router';
import { fetchHistory } from '../actions/history';

function* fetchTrade() {

  try {
    const [currencies, marketData, tickerDataTemp] = yield call(getTradeData);
    const tickerData = [];
    for (var i = 0; i < marketData.length; i++) {
      let key = marketData[i].id;
      let name = marketData[i].name;
      let ticker = tickerDataTemp[key].ticker;
      ticker.name = name;
      let symbol = ticker.price_change_percent.substr(0, 1);
      if (symbol == "+") {
        ticker.class = "crypt-up";
      } else if (symbol == "-") {
        ticker.class = "crypt-down";
      }
      else {
        ticker.class = "";
      }
      tickerData.push(ticker);
    }
    yield put(actions.successTradeData({ marketData: marketData, tickerData: tickerData, currencies: currencies }));
  }
  catch (e) {
    console.log("Fail Fetch data", e);
    yield put(actions.failTradeData());
  }
}

export function* fetchTradeSaga() {
  yield takeEvery(types.FETCH_TRADE_DATA, fetchTrade);
}
