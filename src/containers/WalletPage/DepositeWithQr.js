import React, { Component } from 'react';
import { withRouter } from 'react-router';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import Layout from '../Layout';
import { fetchWalletData, fetchWalletAddress, setActiveWallet } from '../../actions/wallet';
import { fetchHistory } from '../../actions/history';
import { handleChangeWithdraw, fetchSubmitWithdraw } from '../../actions/withdraw';
import QRCode from 'qrcode.react'
import copy from '../../assets/images/copy.png'
import Link from '../../assets/images/link.png'

import imgVip from '../../assets/images/vip.svg';
import CoinList from './List';
import History from './History';
class DepositeWithQr extends Component {
  componentDidMount() { }

  //FIXME: query the correct history
  // filterHistory = list => list.filter(item => item.currency === this.props.activeWallet);

  render() {
      const {coinName = '',Code = ""} =this.props
    return (
      <div className="tab-pane fade show active" id="v-pills-zilliqua-btc-deposit" role="tabpanel"
        aria-labelledby="v-pills-zilliqua-btc-deposit-tab">
        <h6 className="text-uppercase  crypt-down"> Deposit {coinName}coin</h6>
        {/* <p>Details - <a href="#/do-something" className="crypt-up">Get VIP Now</a></p> */}
        <p>Please paste the address below in your wallet</p>

        <form className="deposit-form">
        <div className="text-center mt-5 mb-2">
            <QRCode value="http://facebook.github.io/react/" level={"L"}/>
            </div>
            <p className="text-center mt-2 mb-4x">{Code}</p> 
                
            <div className="form-group text-center mt-2 mb-3">
            <img src={copy}  width="40" className="crypt-market-cap-logo pr-2" alt="coin" />
            <img src={Link} width="40" className="crypt-market-cap-logo pr-2" alt="coin" />
            </div>
            <div className="form-group mt-2 mb-3" >
            <input type="checkbox" name="payment-amount" id="payment-btc-amount1" className="payment-amount" />
            <label htmlFor="payment-btc-amount1">Add to recipients</label>
            <div className="check"></div>
          </div>
        </form>
        <History />
      </div>
    );
  }
}

export default DepositeWithQr;