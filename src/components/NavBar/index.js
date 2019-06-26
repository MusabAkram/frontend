import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import IconButton from '@material-ui/core/IconButton';
// import styles from './styles';
// import { getMatch } from '../../utils';
import actions from '../../actions';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../../assets/logo.png';

class NavBar extends Component {
  state = {
    anchorEl: null,
    marketTable:false,
    market: []
  };
  componentDidMount(){
    console.log('ssssssss')
    this.props.actions.fetchMarket()
  }

  handleMenuClick = event => this.setState({ menuAnchorEl: event.currentTarget });

  handleClick = event => this.setState({ anchorEl: event.currentTarget });

  handleClose = () => this.setState({ anchorEl: null, menuAnchorEl: null });

  logoutUser = () => {
    this.props.actions.fetchLogout();
    this.setState({ anchorEl: null });
  };
  setMarket=(coin)=>{
    this.setState({market:coin})
  }
  goBack = () => {
    const { history, location } = this.props;

    if (location.search.length > 0) {
      history.push({
        ...location,
        pathname: location.pathname.slice(0, location.pathname.lastIndexOf('/')),
        search: ''
      });
    }
  }
  componentWillReceiveProps(newProps){
    if(!this.state.market.name && newProps.marketCoin){
      var data =  newProps.marketCoin[0]
      this.setState({market:data})
    }
  }
  ShowTable=()=>{
    this.setState({marketTable:!this.state.marketTable})
    setTimeout(() => {
      this.setState({marketTable:false})
    }, 4000);
  }
  render() {
    const { classes, location, wallets, activeWallet } = this.props;
    const { anchorEl, menuAnchorEl } = this.state;

    const menuButton = (
      <IconButton
        color="inherit"
        aria-label="Menu"
        aria-owns={menuAnchorEl ? 'nav-menu' : undefined}
        aria-haspopup="true"
        onClick={this.handleMenuClick}
      >
        <MenuIcon />
      </IconButton>
    );
    const { isFetching, user,marketCoin } = this.props;
    let isAuthenticated = false;
    if (user) {
      isAuthenticated = user.email && user.state === 'active';
    }
    console.log(this.state)
    const {market} = this.state
    return (
      <div className="crypt-dark">
        <header>
          <div className='container-full-width'>
            <div className="crypt-header">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                  <div className="row">
                    <div className="col-xs-2">
                      <div className="crypt-logo">
                        <img src={logo} alt="logo" />
                      </div>
                    </div>
                    <div class="col-xs-2">
								<div class="crypt-mega-dropdown-menu">
								  	<a href="#" class="crypt-mega-dropdown-toggle" onClick={()=>this.ShowTable()}>{market && market.name} <i class="pe-7s-angle-down-circle"></i></a>
								  	<div class={this.state.marketTable?"crypt-mega-dropdown-menu-block shown":"crypt-mega-dropdown-menu-block"}>
								  		<div class="crypt-market-status">
											<div>
											  <div class="tab-content">
											    <div role="tabpanel" class="tab-pane active">
											    	<table class="table table-striped">
													  <thead>
													    <tr>
													      <th scope="col">Coin</th>
													      <th scope="col">Price</th>
													      <th scope="col">Volume</th>
													      <th scope="col">Change</th>
													    </tr>
													  </thead>
													  <tbody>
                              {marketCoin && marketCoin.map((coin)=>(
													    <tr onClick={()=>this.setMarket(coin)}>
													      <th scope="row">{coin.ask_unit.toUpperCase()}</th>
													      <td class="crypt-down">{coin.ask_fee}</td>
													      <td>{coin.max_bid_price}</td>
													      <td class="crypt-down"><b>{coin.bid_fee}%</b></td>
													    </tr>
                              ))}
													  </tbody>
													</table>
											    </div>
											  </div>
											</div>
										</div>
								  	</div>
								</div>
							</div>
                    <div className="col-xs-8  d-none d-lg-block">
                      <div className='row showStatus'>
                        <div className="crypt-heading-menu fright">
                          <p>High {market && market.ask_unit && market.ask_unit.toUpperCase()}
                            <br/>
                            <span className="crypt-up">{market && market.max_bid_price}</span></p>
                        </div >
                        <div className=" crypt-heading-menu fright">
                          <p>Low {market && market.ask_unit && market.ask_unit.toUpperCase()}
                            <br/>
                            <span className="crypt-down">{market && market.min_ask_price}</span></p>
                        </div>
                        <div className=" crypt-heading-menu fright">
                          <p>Volume 24Hr
                            <br/>
                            <span className="crypt-down">{market && market.ask_fee}</span></p>
                        </div>
                      </div>
                      {/* <!-- TradingView Widget END --> */}
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 d-none d-md-block d-lg-block">
                  <ul className="crypt-heading-menu fright">
                    <li><a href="exchange.html">Exchange</a></li>
                    <li><a href="market-overview.html">wallet</a></li>
                    <li><a href="marketcap.html">Support</a></li>
                    {/* <li><a href="withdrawl.html">Account</a></li> */}
                    <li className="crypt-box-menu menu-red"><a href='#'>{isAuthenticated?'Settings':'register'}</a></li>
                    <li className="crypt-box-menu menu-green"><a href='#'  onClick={()=>isAuthenticated?this.logoutUser():{}} >{isAuthenticated?"Log out":'login'}</a></li>
                  </ul>
                </div><i className="menu-toggle pe-7s-menu d-xs-block d-sm-block d-md-none d-sm-none"></i></div>
            </div>
          </div>
          <div className="crypt-mobile-menu">
            <ul className="crypt-heading-menu">
              <li className="active"><a href="#/">Exchange</a></li>
              <li><a href="#/">Market Cap</a></li>
              <li><a href="#/">Treanding</a></li>
              <li><a href="#/">Tools</a></li>
              <li className="crypt-box-menu menu-red"><a href="#/">register</a></li>
              <li className="crypt-box-menu menu-green"><a href="#/">login</a></li>
            </ul>
            <div className="crypt-gross-market-cap">
              <h5>$34.795.90 <span className="crypt-up pl-2">+3.435 %</span></h5>
              <h6>0.7925.90 BTC <span className="crypt-down pl-2">+7.435 %</span></h6></div>
          </div>
        </header>
      </div>
    );
  }
}

export default compose(
  withRouter,
  // withStyles(styles),
  connect(state => ({
    wallets: state.wallet.list,
    activeWallet: state.wallet.activeWallet,
    user: state.user.data,
    isFetching: state.user.isFetching,
    marketCoin:state.market.coinValue.data
  }), actions),
)(NavBar);
