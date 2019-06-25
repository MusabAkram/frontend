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
    marketTable:false
  };
  componentDidMount(){
    console.log('ssssssss')
    // this.props.actions.fetchMarket()
  }
  handleMenuClick = event => this.setState({ menuAnchorEl: event.currentTarget });

  handleClick = event => this.setState({ anchorEl: event.currentTarget });

  handleClose = () => this.setState({ anchorEl: null, menuAnchorEl: null });

  logoutUser = () => {
    this.props.actions.fetchLogout();
    this.setState({ anchorEl: null });
  };

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
    const { isFetching, user } = this.props;
    let isAuthenticated = true;
    // if (user) {
    //   isAuthenticated = user.email && user.state === 'active';
    // }
    console.log(this.props)
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
								  	<a href="#" class="crypt-mega-dropdown-toggle" onClick={()=>this.ShowTable()}>BTC/ETH <i class="pe-7s-angle-down-circle"></i></a>
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
													    <tr>
													      <th scope="row">BTC</th>
													      <td class="crypt-down">0.000056</td>
													      <td>5.3424984</td>
													      <td class="crypt-down"><b>-5.4%</b></td>
													    </tr>
													  </tbody>
													</table>
											    </div>
											    <div role="tabpanel" class="tab-pane">
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
													    <tr>
													      <th scope="row">BTC</th>
													      <td class="crypt-down">0.000056</td>
													      <td>5.3424984</td>
													      <td class="crypt-down"><b>-5.4%</b></td>
													    </tr>
													    <tr>
													      <th scope="row">LTC</th>
													      <td>0.0000564</td>
													      <td>6.6768876</td>
													      <td>-6.7%</td>
													    </tr>
													    <tr>
													      <th scope="row">DOGE</th>
													      <td class="crypt-up">0.0000234</td>
													      <td>4.3456600</td>
													      <td class="crypt-up">-9.6%</td>
													    </tr>
													    <tr>
													      <th scope="row">XMR</th>
													      <td>0.0000567</td>
													      <td>4.3456600</td>
													      <td>-5.6%</td>
													    </tr>
													    <tr>
													      <th scope="row">DOGE</th>
													      <td class="crypt-up">0.0000234</td>
													      <td>4.3456600</td>
													      <td class="crypt-up">-9.6%</td>
													    </tr>
													    <tr>
													      <th scope="row">XMR</th>
													      <td>0.0000567</td>
													      <td>4.3456600</td>
													      <td>-5.6%</td>
													    </tr>
													  </tbody>
													</table>
											    </div>
											    <div role="tabpanel" class="tab-pane">
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
													    <tr>
													      <th scope="row">BTC</th>
													      <td class="crypt-down">0.000056</td>
													      <td>5.3424984</td>
													      <td class="crypt-down"><b>-5.4%</b></td>
													    </tr>
													    <tr>
													      <th scope="row">DOGE</th>
													      <td class="crypt-up">0.0000234</td>
													      <td>4.3456600</td>
													      <td class="crypt-up">-9.6%</td>
													    </tr>
													    <tr>
													      <th scope="row">XMR</th>
													      <td>0.0000567</td>
													      <td>4.3456600</td>
													      <td>-5.6%</td>
													    </tr>
													    <tr>
													      <th scope="row">DOGE</th>
													      <td class="crypt-up">0.0000234</td>
													      <td>4.3456600</td>
													      <td class="crypt-up">-9.6%</td>
													    </tr>
													    <tr>
													      <th scope="row">XMR</th>
													      <td>0.0000567</td>
													      <td>4.3456600</td>
													      <td>-5.6%</td>
													    </tr>
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
                          <p>High BTC
                            <br/>
                            <span className="crypt-up">0.435453</span></p>
                        </div >
                        <div className=" crypt-heading-menu fright">
                          <p>Low BTC
                            <br/>
                            <span className="crypt-down">0.09945</span></p>
                        </div>
                        <div className=" crypt-heading-menu fright">
                          <p>Volume 24Hr
                            <br/>
                            <span className="crypt-down">12.33445</span></p>
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
                    <li><a href="trading.html">Tools</a></li>
                    {/* <li><a href="withdrawl.html">Account</a></li> */}
                    <li className="crypt-box-menu menu-red"><a href='#'>{isAuthenticated?'Settings':'register'}</a></li>
                    <li className="crypt-box-menu menu-green"><a href='#'  onClick={()=>this.logoutUser()} >{isAuthenticated?"Log out":'login'}</a></li>
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
    state:state
  }), actions),
)(NavBar);
