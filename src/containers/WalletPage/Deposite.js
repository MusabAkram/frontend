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
class Deposite extends Component {
  componentDidMount() { }

  //FIXME: query the correct history
  // filterHistory = list => list.filter(item => item.currency === this.props.activeWallet);

  render() {
    return (
      <div className="tab-pane fade show active" id="v-pills-zilliqua-btc-deposit" role="tabpanel"
        aria-labelledby="v-pills-zilliqua-btc-deposit-tab">
        <h6 className="text-uppercase">REMAINING TO VIP $3000</h6>
        <p>Details - <a href="#/do-something" className="crypt-up">Get VIP Now</a></p>
        <form className="deposit-form">
          <div className="crypt-radio-boxed">
            <input type="radio" name="payment-amount" id="payment-btc-amount1" className="payment-amount" />
            <label htmlFor="payment-btc-amount1">$ 30000 <img src={imgVip} width="40" alt="" /></label>
            <div className="check"></div>
          </div>
          <div className="crypt-radio-boxed">
            <input type="radio" name="payment-amount" id="payment-btc-amount2" className="payment-amount" /><label
              htmlFor="payment-btc-amount2">$ 20000 <img src={imgVip} width="40" alt="" /></label>
            <div className="check"></div>
          </div>
          <div className="crypt-radio-boxed">
            <input type="radio" name="payment-amount" id="payment-btc-amount3" className="payment-amount" /><label
              htmlFor="payment-btc-amount3">$ 10000 <img src={imgVip} width="40" alt="" /></label>
            <div className="check"></div>
          </div>
          <div className="crypt-radio-boxed">
            <input type="radio" name="payment-amount" id="payment-btc-amount4" className="payment-amount" /><label
              htmlFor="payment-btc-amount4">$ 5000 </label>
            <div className="check"></div>
          </div>
          <div className="crypt-radio-boxed">
            <input type="radio" name="payment-amount" id="payment-btc-amount5" className="payment-amount" /><label
              htmlFor="payment-btc-amount5">$ 2000 </label>
            <div className="check"></div>
          </div>
          <div className="crypt-radio-boxed">
            <input type="radio" name="payment-amount" id="payment-btc-amount6" className="payment-amount" /><label
              htmlFor="payment-btc-amount6">$ 1000 </label>
            <div className="check"></div>
          </div>
          <div className="form-group mt-2">
            <select className="crypt-image-select" required>
              <option value="">Choose A Payment Option</option>
              <option value="1">Visa</option>
              <option value="2">Master Card</option>
              <option value="3">AMEX</option>
            </select>
          </div>
          <div className="input-group input-text-select mb-3">
            <div className="input-group-prepend">
              <input placeholder="Amount" type="text" className="form-control crypt-input-lg" />
            </div>
            <select className="custom-select" name="inputGroupSelect01">
              <option value="1">USD</option>
              <option value="2">GBP</option>
              <option value="3">EUR</option>
            </select>
          </div>
          <div className="text-center crypt-up mt-5 mb-5">
            <p>You will approximately pay</p>
            <h3>$500</h3>
          </div>
          <a href="#pay" className="crypt-button-red-full">Proceed To Payment</a>
        </form>
      </div>
    );
  }
}

export default Deposite;