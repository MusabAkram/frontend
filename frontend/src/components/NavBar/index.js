import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import compose from 'recompose/compose';

// import styles from './styles';
// import { getMatch } from '../../utils';
import actions from '../../actions';

import logo from '../../assets/logo.png';

class NavBar extends Component {
  state = {
    anchorEl: null
  };

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

  render() {
    // const { classes, location, wallets, activeWallet } = this.props;
    // const { anchorEl, menuAnchorEl } = this.state;

    // const menuButton = (
    //   <IconButton
    //     color="inherit"
    //     aria-label="Menu"
    //     aria-owns={menuAnchorEl ? 'nav-menu' : undefined}
    //     aria-haspopup="true"
    //     onClick={this.handleMenuClick}
    //   >
    //     <MenuIcon />
    //   </IconButton>
    // );

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
                    <div className="col-xs-2">
                      <div className="crypt-mega-dropdown-menu">
                        <a href="#/" className="crypt-mega-dropdown-toggle">BTC/ETH <i className="pe-7s-angle-down-circle"></i></a>
                        <div className="crypt-mega-dropdown-menu-block">
                          <div className="crypt-market-status">
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
                    <li className="crypt-box-menu menu-red"><a href="register.html">register</a></li>
                    <li className="crypt-box-menu menu-green"><a href="login.html">login</a></li>
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
    activeWallet: state.wallet.activeWallet
  }), actions),
)(NavBar);
