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
class BuySell extends Component {
  constructor(props){
    super(props);
    this.state={
      showTab: 1
    }
  }
  componentDidMount() { }

  //FIXME: query the correct history
  // filterHistory = list => list.filter(item => item.currency === this.props.activeWallet);
  handleTab=(tab)=>{
    this.setState({showTab:tab});
  }
  render() {
    const { showTab } = this.state
    return (
      <div className="tab-pane fade show active" id="v-pills-zilliqua-btc-buysell" role="tabpanel"
        aria-labelledby="v-pills-zilliqua-btc-buysell-tab">
            <ul className="nav nav-tabs">
                      <li role="presentation"><a href="#Buy" onClick={()=>this.handleTab(1)} className={showTab ==1?" active":''} data-toggle="tab">Buy</a></li>
                      <li role="presentation"><a href="#Sell" onClick={()=>this.handleTab(2)}  className={showTab==2?"active":''} data-toggle="tab">Sell</a></li>
                    </ul>
        <div className="crypt-boxed-area">
          {/* <h6 className="crypt-bg-head"><b className="crypt-up">BUY</b> / <b className="crypt-down">SELL</b></h6> */}
          <div className="row no-gutters">
            {showTab == 1&&<div className="col-md-12 col-xxl-6">
              <div className="crypt-buy-sell-form">
                {/* <p>Buy <span className="crypt-up">BTC</span> <span className="fright">Available: <b
                  className="crypt-up">20 BTC</b></span></p> */}
                <div className="crypt-buy">
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">Price</span>
                    </div>
                    <input type="text" className="form-control" placeholder="0.02323476" readOnly />
                    <div className="input-group-append">
                      <span className="input-group-text">BTC</span>
                    </div>
                  </div>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">Amount</span>
                    </div>
                    <input type="number" className="form-control" />
                    <div className="input-group-append">
                      <span className="input-group-text">BTC</span>
                    </div>
                  </div>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">Total</span>
                    </div>
                    <input type="text" className="form-control" readOnly />
                    <div className="input-group-append">
                      <span className="input-group-text">BTC</span>
                    </div>
                  </div>
                  {/* <div>
                    <p>Fee: <span className="fright">100%x0.2 = 0.02</span></p>
                  </div> */}
                  <div className="text-center mt-2 mb-2 crypt-up">
                    {/* <p>You will approximately pay</p> */}
                    <h4>0.09834 BTC</h4>
                  </div>
                  <div className="crypt-heading-menu fright">
                    <a href="#buy" className="crypt-button-green-full">Buy</a>
                  </div>
                </div>
              </div>
            </div>}
           { showTab == 2&&  <div className="col-md-12 col-xxl-6">
              <div className="crypt-buy-sell-form">
                {/* <p>Sell <span className="crypt-down">BTC</span> <span className="fright">Available: <b
                  className="crypt-down">20 BTC</b></span></p> */}
                <div className="crypt-sell">
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">Price</span>
                    </div>
                    <input type="text" className="form-control" placeholder="0.02323476" readOnly />
                    <div className="input-group-append">
                      <span className="input-group-text">BTC</span>
                    </div>
                  </div>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">Amount</span>
                    </div>
                    <input type="number" className="form-control" />
                    <div className="input-group-append">
                      <span className="input-group-text">BTC</span>
                    </div>
                  </div>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">Total</span>
                    </div>
                    <input type="text" className="form-control" readOnly />
                    <div className="input-group-append">
                      <span className="input-group-text">BTC</span>
                    </div>
                  </div>
                  {/* <div>
                    <p>Fee: <span className="fright">100%x0.2 = 0.02</span></p>
                  </div> */}
                  <div className="text-center mt-2 mb-2 crypt-down">
                    {/* <p>You will approximately pay</p> */}
                    <h4>0.09834 BTC</h4>
                  </div>
                  <div  className="crypt-heading-menu fright">
                    <a href="#sell" className="crypt-button-red-full">Sell</a>
                  </div>
                </div>
              </div>
            </div>}
          </div>
        </div>
      </div>
    );
  }
}

export default BuySell;