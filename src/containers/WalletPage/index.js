import React, { Component } from 'react';
import { withRouter } from 'react-router';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import Layout from '../Layout';
import { fetchWalletData, fetchWalletAddress, setActiveWallet } from '../../actions/wallet';
import { fetchHistory } from '../../actions/history';
import { handleChangeWithdraw, fetchSubmitWithdraw } from '../../actions/withdraw';

import btc from '../../assets/images/coins/btc.png';
import eth from '../../assets/images/coins/eth.png';
import ltc from '../../assets/images/coins/ltc.png';
import xrp from '../../assets/images/coins/xrp.png';
import monero from '../../assets/images/coins/monero.png';
import zil from '../../assets/images/coins/zil.png';
import dash from '../../assets/images/coins/dash.png';
import usd from '../../assets/images/coins/usd.png';
import trst from '../../assets/images/coins/trst.png';

import imgVip from '../../assets/images/vip.svg';
import Deposite from './Deposite';
import WithDraw from './WidthDraw';
import BuySell from './Buy_Sell';
import CoinList from './List';
import History from './History';
class WalletPage extends Component {
  constructor(props){
    super(props);
    this.state={
      CionDetails: {id: "",
      locked: 0,
      name: "",
      withdraw_fee: ''},
      ShowTab:0,
      walletList:{},
      images:
      {btc:btc,
      eth:eth,
      ltc:ltc,
      xrp:xrp,
      monero:monero,
      zil:zil,
      dash:dash,
    usd:usd,trst:trst}
    };
  }
  handleTabe=(tab)=>{
    this.setState({ShowTab:tab});
  }

componentDidMount(){
  this.props.fetchWalletData()
}
componentWillReceiveProps(newProps){
    console.log(newProps.wallets,CoinList,'waleeeeeeeeeeeee')
    if(newProps.wallets){
      this.setState({walletList:newProps.wallets})
    }
}
  //FIXME: query the correct history
  // filterHistory = list => list.filter(item => item.currency === this.props.activeWallet);

  render() {
    const {ShowTab,CionDetails,walletList,images}=this.state;
    return (
      <Layout>
        {/* sidebar */}
        <div className="crypt-side-menu crypt-left-sided crypt-floatable-menu bg-white">
          <p>Account</p>
          <ul>
            <li><a href="/wallets"><i className="pe-7s-wallet"></i> Wallet</a></li>
            <li><a href="#history"><i className="pe-7s-wristwatch"></i> History</a></li>
          </ul>
          <hr />
          <p>Market</p>
          <ul>
            <li><a href="/trade"><i className="pe-7s-way"></i> Exchange</a></li>
          </ul>
        </div>

        {/* accounts */}
        <div className="container-full-width">
          <div className="row sm-gutters">
            <div className="col-xl-2 d-none d-xl-block">
            </div>
            <div className="col-md-4 col-lg-4 col-xl-4">
              <div className="crypt-deepblue-segment p-2 mt-3">
                <form className="crypt-dash-search">
                  <input type="search" placeholder="Search..." name="s" className="crypt-big-search" />
                  <button type="submit">
                    <i className="pe-7s-search"></i>
                  </button>
                </form>
                <ul className="crypt-big-list crypt-coin-select">
                  {Object.values(walletList).map((data)=>(
                    <li onClick={()=>this.setState({CionDetails:data})}>
                      <a 
                      // href={data.name}
                      >
                        <img src={images[data.id]} width="25" className="crypt-market-cap-logo pr-2" alt="coin" /> {data.name}
                        <p className="fright"><b>{data.balance}</b></p>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-md-8 col-lg-8 col-xl-6">
              <div className="crypt-dash-withdraw mt-3 d-block" id="bitcoin">
                <div className="crypt-withdraw-heading">
                  <div className="row">
                    <div className="col-sm-4 col-md-3">
                      <p><b>1 {CionDetails.id.toUpperCase()}</b></p>
                      <p className="crypt-up"><b>{CionDetails.balance}</b></p>
                    </div>
                    <div className="col-sm-4 col-md-5">
                      <i className="pe-7s-lock icon-big"></i>
                      <p><b>Locked:{CionDetails.locked}</b></p>
                    </div>
                    <div className="col-sm-4 col-md-4">
                      <p><b>Total:</b></p>
                      <p className="crypt-up"><b>${CionDetails.withdraw_fee}</b></p>
                    </div>
                  </div>
                </div>
                <div className="crypt-withdraw-body bg-white">
                  <div className="row">
                    <div className="col-md-3">
                      <div className="nav flex-column nav-pills" role="tablist" aria-orientation="vertical">
                        <a className={`nav-link ${ShowTab == 0 ? ' active': ''}`}  onClick={()=>this.handleTabe(0)}  id="v-pills-zilliqua-btc-deposit-tab" data-toggle="pill"
                          // href="#v-pills-zilliqua-btc-deposit" role="tab" aria-controls="v-pills-zilliqua-btc-deposit"
                          aria-selected="true">
                          <i className="pe-7s-bottom-arrow"></i> Deposit
                        </a>

                        <a className={`nav-link ${ShowTab == 1 ? ' active': ''}`} onClick={()=>this.handleTabe(1)}  id="v-pills-zilliqua-btc-withdrawl-tab" data-toggle="pill"
                          // href="#v-pills-zilliqua-btc-withdrawl" role="tab" aria-controls="v-pills-zilliqua-btc-withdrawl"
                          aria-selected="false">
                          <i className="pe-7s-up-arrow"></i> Withdraw
                        </a>

                        <a className={`nav-link ${ShowTab == 2 ? ' active': ''}`} onClick={()=>this.handleTabe(2)}  id="v-pills-zilliqua-btc-history-tab" data-toggle="pill"
                          // href="#v-pills-zilliqua-btc-history" role="tab" aria-controls="v-pills-zilliqua-btc-history"
                          aria-selected="false">
                          <i className="pe-7s-clock"></i> History
                        </a>

                        <a className={`nav-link ${ShowTab == 3 ? ' active': ''}`} onClick={()=>this.handleTabe(3)}  id="v-pills-zilliqua-btc-buysell-tab" data-toggle="pill"
                          // href="#v-pills-zilliqua-btc-buysell" role="tab" aria-controls="v-pills-zilliqua-btc-buysell"
                          aria-selected="false">
                          <i className="pe-7s-refresh-2"></i> Buy / Sell
                        </a>
                      </div>
                    </div>
                    <div className="col-md-9">
                      <div className="tab-content" id="v-pills-zilliqua-btc-tabContent">
                        {ShowTab == 0 &&  <Deposite />}
                        {ShowTab == 1 &&  <WithDraw/>}
                        {ShowTab == 2 &&    <History/>}
                        {ShowTab == 3 &&    <BuySell/>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  console.log(state,'ssss')
  return {
    wallets: state.wallet.list,
    activeWallet: state.wallet.activeWallet,
    depositHistory: state.history.deposits,
    withdrawHistory: state.history.withdraws,
    rid: state.withdraw.rid,
    amount: state.withdraw.amount,
    otp: state.withdraw.otp,
    withdrawIsFetching: state.withdraw.isFetching,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchWalletData: () => dispatch(fetchWalletData()),
    setActiveWallet: id => dispatch(setActiveWallet(id)),
    fetchWalletAddress: id => dispatch(fetchWalletAddress(id)),
    fetchHistory: () => dispatch(fetchHistory()),
    fetchSubmitWithdraw: () => dispatch(fetchSubmitWithdraw()),
    handleChangeWithdraw: (field, value) => dispatch(handleChangeWithdraw(field, value))
  };
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(WalletPage);
