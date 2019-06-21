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
import History from './History';
class WithDraw extends Component {
  constructor(props){
    super(props);
    this.state={
      ShowTab: 1,
    }}
  componentDidMount() { }

  //FIXME: query the correct history
  // filterWithDraw = list => list.filter(item => item.currency === this.props.activeWallet);
  handleTabe=(tab)=>{
    this.setState({ShowTab:tab});
  }
  render() {
    const {ShowTab} = this.state
    return (
      <div className="tab-pane  fade show active" id="v-pills-zilliqua-btc-withdrawl" role="tabpanel"
        aria-labelledby="v-pills-zilliqua-btc-withdrawl-tab">
            <ul className="nav nav-tabs mt-2 mb-2">
                      <li role="presentation"><a href="#closed-orders"onClick={()=>this.handleTabe(1)}  className={`${ShowTab == 1 ? ' active': ''}`} data-toggle="tab">WithDraw Bank</a></li>
                      <li role="presentation"><a href="#active-orders"onClick={()=>this.handleTabe(2)} className={`${ShowTab == 2 ? ' active': ''}`} data-toggle="tab">Send Coins</a></li>
                    </ul>
                    {ShowTab == 1&&<div>
                      
        <h4 className="crypt-down">Withdraw ZAR</h4>
        <p><i className="pe-7s-info"></i> Standard bank transfer will be made up to 2 workdays</p>
        <form>
          <div className="input-group mb-3">
            <input type="text" placeholder="Amount" className="form-control" name="amount" />
            <div className="input-group-append">
              <span className="input-group-text crypt-up">Zar</span>
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
            <input type="text" className="form-control" placeholder="Bank Name" name="swift" />
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
          <ul  className="crypt-heading-menu fright" >
            <li  className="crypt-box-menu menu-red">

          <a href="#withdraw"  className="crypt-button-red-full"> Withdraw</a>
            </li>
          </ul>
        </form>
        <History />
        
        </div>}
        {ShowTab == 2&&<div>
                      
                      <h4 className="crypt-down">Send coin</h4>
                      <p><i className="pe-7s-info"></i> Standard bank transfer will be workdays</p>
                      <form>
                        <div className="input-group mb-3">
                          <input type="text" placeholder="Amount" className="form-control" name="amount" />
                          <div className="input-group-append">
                            <span className="input-group-text crypt-up">Withdraw All</span>
                          </div>
                        </div>
                        <div className="input-group mb-3">
                          <input type="text" placeholder="Recipient Address" className="form-control" name="bank-account" />
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
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="recipient-btc" />
                            <label className="form-check-label" htmlFor="recipient-btc">
                              Add To recipient
                            </label>
                          </div>
                        </div>
                        <ul  className="crypt-heading-menu fright" >
            <li  className="crypt-box-menu menu-red">

          <a href="#withdraw"  className="crypt-button-red-full"> Send</a>
            </li>
          </ul>
          <History />
                      </form>
                      
                      </div>}
      </div>);
  }
}

export default WithDraw;