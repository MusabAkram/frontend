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
class WithDraw extends Component {
  componentDidMount() { }

  //FIXME: query the correct history
  // filterWithDraw = list => list.filter(item => item.currency === this.props.activeWallet);

  render() {
    return (
      <div className="tab-pane  fade show active" id="v-pills-zilliqua-btc-withdrawl" role="tabpanel"
        aria-labelledby="v-pills-zilliqua-btc-withdrawl-tab">
        <h4 className="crypt-down">Wire bank transfer</h4>
        <p><i className="pe-7s-info"></i> Standard bank transfer will be made up to 2 workdays</p>
        <form>
          <div className="input-group mb-3">
            <input type="text" placeholder="Amount" className="form-control" name="amount" />
            <div className="input-group-append">
              <span className="input-group-text">USD</span>
            </div>
          </div>
          <div className="input-group mb-3">
            <input type="text" placeholder="Bank Account Number" className="form-control" name="bank-account" />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary dropdown-toggle" type="button"
                data-toggle="dropdown">Other Address</button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#/do-something">234235234</a>
                <a className="dropdown-item" href="#/do-something">2343453453</a>
                <a className="dropdown-item" href="#/do-something">234234234234</a>
              </div>
            </div>
          </div>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Name" name="name" />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Swift Code" name="swift" />
          </div>
          <div className="form-group">
            <div className="form-group">
              <select className="form-control">
                <option>Country</option>
                <option>United States</option>
                <option>India</option>
                <option>Japan</option>
                <option>Korea</option>
                <option>China</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="recipient-btc" />
              <label className="form-check-label" htmlFor="recipient-btc">
                Add To recipient
              </label>
            </div>
          </div>
          <a href="#withdraw" className="crypt-button-red-full">Initiate Withdraw</a>
        </form>
      </div>);
  }
}

export default WithDraw;