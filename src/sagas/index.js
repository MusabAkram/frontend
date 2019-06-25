import { all } from 'redux-saga/effects';
import { fetchUserSaga } from './user';
import { fetchWalletSaga, setActiveWalletSaga, fetchWalletAddressSaga } from './wallet';
import { fetchHistorySaga } from './history';
import { fetchSubmitWithdrawSaga } from './withdraw';
import { fetchLogoutSaga, fetchLoginSaga,fetchSignUpSaga } from './auth';
import { fetchMarketSaga } from './market'
import { fetchTradeSaga } from './trade';
export default function* rootSaga() {
  yield all([
    fetchUserSaga(),
    fetchWalletSaga(),
    setActiveWalletSaga(),
    fetchWalletAddressSaga(),
    fetchHistorySaga(),
    fetchSubmitWithdrawSaga(),
    fetchLogoutSaga(),
    fetchLoginSaga(),
    fetchSignUpSaga(),
    fetchMarketSaga(),
        fetchTradeSaga(),
  ]);
}