import React, { Component } from 'react';
import { withRouter } from 'react-router';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import Layout from '../Layout';
import { fetchWalletData, fetchWalletAddress, setActiveWallet } from '../../actions/wallet';
import { fetchHistory } from '../../actions/history';
import { handleChangeWithdraw, fetchSubmitWithdraw } from '../../actions/withdraw';



import imgVip from '../../assets/images/vip.svg';
import CoinList from './List';
class History extends Component {
  componentDidMount() { }

  //FIXME: query the correct history
  // filterhistory = list => list.filter(item => item.currency === this.props.activeWallet);

  render() {
    return (
      <div className="tab-pane  fade show active" id="v-pills-zilliqua-btc-history" role="tabpanel"
        aria-labelledby="v-pills-zilliqua-btc-history-tab">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Time</th>
              <th scope="col">Amount</th>
              <th scope="col">Currency</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">22:35:59</th>
              <td className="crypt-down">0.000056</td>
              <td>BTC</td>
            </tr>
            <tr>
              <th scope="row">22:35:59</th>
              <td>0.0000564</td>
              <td>ETH</td>
            </tr>
            <tr>
              <th scope="row">22:35:59</th>
              <td>0.0000234</td>
              <td>XHO</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default History;