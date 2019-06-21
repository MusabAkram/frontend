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
      name:'',
      type:'coin',
      id:''
    }}
  componentDidMount() {
    const {CionDetails}=this.props
  const   {base_factor,
    deposit_fee,
    id,
    min_deposit_amount,
    min_withdraw_amount,
    name,
    precision,
    symbol,
    type,
    withdraw_fee,
    withdraw_limit_24h,
    withdraw_limit_72h,
   } = CionDetails
this.setState({
  name:name,id:id,type:type
})
if(type === 'coin'){
  this.setState({ShowTab:1});
}else{
  this.setState({ShowTab:2});
}

   }
   componentWillReceiveProps(newProps) {
    const {CionDetails}=this.props
  const   {base_factor,
    deposit_fee,
    id,
    min_deposit_amount,
    min_withdraw_amount,
    name,
    precision,
    symbol,
    type,
    withdraw_fee,
    withdraw_limit_24h,
    withdraw_limit_72h,
   } = CionDetails
this.setState({
  name:name,id:id,type:type
})
if(type === 'coin'){
  this.setState({ShowTab:1});
}else{
  this.setState({ShowTab:2});
}

   }
  //FIXME: query the correct history
  // filterWithDraw = list => list.filter(item => item.currency === this.props.activeWallet);
  handleTabe=(tab)=>{
    this.setState({ShowTab:tab});
  }
  render() {
    const {ShowTab,name,id} = this.state

    return (
      <div className="tab-pane  fade show active" id="v-pills-zilliqua-btc-withdrawl" role="tabpanel"
        aria-labelledby="v-pills-zilliqua-btc-withdrawl-tab">
                    {ShowTab == 1&&<div>
                      
        <h4 className="crypt-down">Withdraw {id.toUpperCase()}</h4>
        <p><i className="pe-7s-info"></i> Standard bank transfer will be made up to 2 workdays</p>
        <form>
          <div className="input-group mb-3">
            <input type="text" placeholder="Amount" className="form-control" name="amount" />
            <div className="input-group-append">
              <span className="input-group-text crypt-up">{id.toUpperCase()}</span>
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
                      
                      <h4 className="crypt-down">Send {name}</h4>
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