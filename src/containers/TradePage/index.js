import TradingViewWidget, { Themes,BarStyles } from 'react-tradingview-widget';
import React, { Component } from 'react';
import { withRouter } from 'react-router';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import Layout from '../Layout';
import imgStar from '../../assets/images/star.svg';
import imgEmpty from '../../assets/images/empty.png';
import Transition from './Transition';
import tradeJSON from './trade';
import Buy_Sells from './Sells';
import { fetchTradeData } from '../../actions/trade';
import { fetchHistory } from '../../actions/history';
import { host } from "../../config";


class TradePage extends Component {
  render() {
    return (
      <Layout>
        <div className="container-fluid">
          <div className="row sm-gutters">
            <div className="col-md-6 col-lg-6 col-xl-3 col-xxl-2">
              <div className="crypt-market-status mt-4">
                <div>
                  {/* <!-- Nav tabs --> */}
                  <ul className="nav nav-tabs" id="crypt-tab">
                    <li role="presentation"><a href="#usd" className="active" data-toggle="tab">usd</a></li>
                    <li role="presentation"><a href="#btc" data-toggle="tab">btc</a></li>
                    <li role="presentation"><a href="#eth" data-toggle="tab">eth</a></li>
                  </ul>

                  {/* <!-- Tab panes --> */}
                  <div className="tab-content crypt-tab-content">
                    <div role="tabpanel" className="tab-pane active" id="usd">
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th scope="col">Coin</th>
                            <th scope="col">Price</th>
                            <th scope="col">Volume</th>
                          </tr>
                        </thead>
                        <tbody className="crypt-table-hover">
                        
                          {tradeJSON.map(data=>(
                            <tr>
                              <td className="align-middle"><img className="crypt-star pr-1" alt="star" src={imgStar} width="15" />{data.Coin}</td>
                              <td className={`${data.class2?data.class2:''} align-middle`}><span className="pr-2" data-toggle="tooltip" data-placement="right" title="$ 0.05">{data.Price}</span></td>
                              <td>
                                <span className="d-block">{data.Volume}</span>
                                <b className={data.class2?data.class2:''}>{data.Volum2}</b>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div role="tabpanel" className="tab-pane" id="btc">
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th scope="col">Coin</th>
                            <th scope="col">Price</th>
                            <th scope="col">Volume</th>
                          </tr>
                        </thead>
                        <tbody>
                          {tradeJSON.map(data=>(
                            <tr>
                              <td className="align-middle"><img className="crypt-star pr-1" alt="star" src={imgStar} width="15" />{data.Coin}</td>
                              <td className={`${data.class2?data.class2:''} align-middle`}><span className="pr-2" data-toggle="tooltip" data-placement="right" title="$ 0.05">{data.Price}</span></td>
                              <td>
                                <span className="d-block">{data.Volume}</span>
                                <b className={data.class2?data.class2:''}>{data.Volum2}</b>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div role="tabpanel" className="tab-pane" id="eth">
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th scope="col">Coin</th>
                            <th scope="col">Price</th>
                            <th scope="col">Volume</th>
                          </tr>
                        </thead>
                        <tbody>
                          {tradeJSON.map(data=>(
                            <tr>
                              <td className="align-middle"><img className="crypt-star pr-1" alt="star" src={imgStar} width="15" />{data.Coin}</td>
                              <td className={`${data.class2?data.class2:''} align-middle`}><span className="pr-2" data-toggle="tooltip" data-placement="right" title="$ 0.05">{data.Price}</span></td>
                              <td>
                                <span className="d-block">{data.Volume}</span>
                                <b className={data.class2?data.class2:''}>{data.Volum2}</b>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-6 col-xxl-8">
              <div className="crypt-gross-market-cap mt-4 mb-3">
                <div className="row">
                  <div className="col-3 col-sm-6 col-md-6 col-lg-6">
                    <div className="row">
                      <div className="col-sm-6 col-md-6 col-lg-6">
                        <p>Last Price BTC</p>
                        <p>0.0234230 $0.04</p>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-6">
                        <p>Change BTC</p>
                        <p className="crypt-down">-0.0234230 -3.35%</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-3 col-sm-2 col-md-3 col-lg-2">
                    <p>High BTC</p>
                    <p className="crypt-up">0.435453</p>
                  </div>
                  <div className="col-3 col-sm-2 col-md-3 col-lg-2">
                    <p>Low BTC</p>
                    <p className="crypt-down">0.09945</p>
                  </div>
                  <div className="col-3 col-sm-2 col-md-3 col-lg-2">
                    <p>Volume 24Hr</p>
                    <p className="crypt-down">12.33445</p>
                  </div>
                </div>
              </div>
              {/* <!-- TradingView Widget BEGIN --> */}
              <div className="tradingview-widget-container mb-3">
                <div id="crypt-candle-chart">
                
                </div>
              </div>
              {/* <!-- TradingView Widget END --> */}
              <div id="depthchart" className="depthchart h-40 crypt-dark-segment">
                <TradingViewWidget
                  symbol="NASDAQ:AAPL"
                  theme={Themes.LIGHT}
                  locale="fr"
                  autosize
                />
              </div>  
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3 col-xxl-2">
              <div className="crypt-market-status mt-4">
                <div>
                  {/* <!-- Nav tabs --> */}
                  <ul className="nav nav-tabs">
                    <li role="presentation"><a href="#history" className="active" data-toggle="tab">orderbook</a></li>
                    <li role="presentation"><a href="#market-trading" data-toggle="tab">Trades</a></li>
                  </ul>

                  {/* <!-- Tab panes --> */}
                  <div className="tab-content">
                    <div role="tabpanel" className="tab-pane active" id="history">
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th scope="col">Time</th>
                            <th scope="col">Price</th>
                            <th scope="col">Volume</th>
                          </tr>
                        </thead>
                        <tbody>
                          {/* {Transition.map(data=>(
                            <tr>
                              <td>{data.Time}</td>
                              <td className={data.class2?data.class2:''}>{data.Price}</td>
                              <td>{data.Volume}</td>
                            </tr>
                          ))} */}

                          <tr>
                            <td colSpan="3" style={{textAlign:"center",fontWeight:"700"}}>Asks</td>
                          </tr>
                            {
                              (this.state.orderBookData==null?(<tr><td className="orderbook_ask" colSpan="3" style={{textAlign:"center"}}>No Data!</td></tr>):(
                               
                                (this.state.orderBookData.asks.length == 0?(<tr style={{backgroundColor:"rgb(239, 146, 180)"}}><td className="orderbook_ask" colSpan="3" style={{textAlign:"center"}}>No Ask Data!</td></tr>):(
                                  this.state.orderBookData.asks.map( data => (
                                    <tr style={{backgroundColor:"rgb(239, 146, 180)"}}>
                                      <td className="orderbook_ask">{data.time}</td>
                                      <td className="orderbook_ask">{data.price}</td>
                                      <td className="orderbook_ask">{data.volume}</td>
                                    </tr>
                                  )                                  
                                  )
                                ))  
                                                      
                                )
                              )
                            }
                            
                            <tr>
                              <td colSpan="3" style={{textAlign:"center" ,fontWeight:"700"}}> Bids</td>
                            </tr>
                             {
                              (this.state.orderBookData==null?(<tr><td className="orderbook_bid" colSpan="3" style={{textAlign:"center"}}>No Data!</td></tr>):(
                                (this.state.orderBookData.bids.length == 0?(<tr style={{backgroundColor:"#d2d2b1"}}><td className="orderbook_bid" colSpan="3" style={{textAlign:"center"}}>No Bid Data!</td></tr>):(
                                  this.state.orderBookData.bids.map( data => (
                                    <tr style={{backgroundColor:"yellow"}}>
                                      <td className="orderbook_bid">{data.time}</td>
                                      <td className="orderbook_bid">{data.price}</td>
                                      <td className="orderbook_bid">{data.volume}</td>
                                    </tr>
                                  )                                  
                                  )         
                                ))
                                             
                                )
                              )
                            }



                        </tbody>
                      </table>
                    </div>
                    <div role="tabpanel" className="tab-pane" id="market-trading">
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th scope="col">Time</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Volume</th>
                          </tr>
                        </thead>
                        <tbody>
                          {/* {Transition.map(data=>(
                            <tr>
                              <td>{data.Time}</td>
                              <td className={data.class2?data.class2:''}>{data.Price}</td>
                              <td>{data.Volume}</td>
                            </tr>
                          ))} */}

{
                            (this.state.marketTradeData==null?(<tr><td colSpan="3" style={{textAlign:"center",color:"red"}}>No Trading Data!</td></tr>):(
                                  this.state.marketTradeData.map(one=>(
                                    <tr>
                                      <td>{one.time}</td>
                                      <td>{one.amount}</td>
                                      <td>{one.volume}</td>
                                    </tr>
                                  )
                                )
                              )    
                            )                   
                          }
                        </tbody>
                      </table>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row sm-gutters">
            {/* order book */}
            <div className="col-xl-7">
              <div>
                <div className="crypt-market-status">
                  <div>
                    {/* <!-- Nav tabs --> */}
                    <ul className="nav nav-tabs">
                      <li role="presentation"><a href="#active-orders" className="active" data-toggle="tab">Active Orders</a></li>
                      <li role="presentation"><a href="#closed-orders" data-toggle="tab">Closed Orders</a></li>
                      <li role="presentation"><a href="#balance" data-toggle="tab">Balance</a></li>
                      <li role="presentation"><a href="#balance" data-toggle="tab">Send</a></li>
                      <li role="presentation"><a href="#balance" data-toggle="tab">Receive</a></li>
                      <li role="presentation"><a href="#balance" data-toggle="tab">Buy</a></li>
                      <li role="presentation"><a href="#balance" data-toggle="tab">Sell</a></li>
                      <li role="presentation"><a href="#balance" data-toggle="tab">Deposit</a></li>
                    </ul>

                    {/* <!-- Tab panes --> */}
                    <div className="tab-content">
                      <div role="tabpanel" className="tab-pane active" id="active-orders">
                        <table className="table table-striped">
                          <thead>
                            <tr>
                              <th scope="col">Time</th>
                              <th scope="col">Buy/sell</th>
                              <th scope="col">Price BTC</th>
                              <th scope="col">Amount BPS</th>
                              <th scope="col">Dealt BPS</th>
                              <th scope="col">Operation</th>
                            </tr>
                          </thead>
                        </table>
                        <div className="no-orders text-center">
                          <img src={imgEmpty} alt="no-orders" />
                        </div>
                      </div>
                      <div role="tabpanel" className="tab-pane" id="closed-orders">
                        <table className="table table-striped">
                          <thead>
                            <tr>
                              <th scope="col">Time</th>
                              <th scope="col">Buy/sell</th>
                              <th scope="col">Price BTC</th>
                              <th scope="col">Amount BPS</th>
                              <th scope="col">Dealt BPS</th>
                              <th scope="col">Operation</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th>22:35:59</th>
                              <td className="crypt-up">Buy</td>
                              <td className="crypt-up">0.000056</td>
                              <td className="crypt-up">0.000056</td>
                              <td className="crypt-up">0.0003456</td>
                              <td>5.3424984</td>
                            </tr>
                            {Buy_Sells.map(data=>(
                              <tr>
                                <th>{data.Time}</th>
                                <td className="crypt-up">{data.Buy_Sells}</td>
                                <td className="crypt-up">{data.PriceBTC}</td>
                                <td className="crypt-up">{data.AmountBPS}</td>
                                <td className="crypt-up">{data.DealtBPS}</td>
                                <td>{data.Operation}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <div role="tabpanel" className="tab-pane" id="balance">
                        <table className="table table-striped">
                          <thead>
                            <tr>
                              <th scope="col">Currency</th>
                              <th scope="col">Amount</th>
                              <th scope="col">Volume</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th>BTC</th>
                              <td>0.0000564</td>
                              <td>6.6768876</td>
                            </tr>
                            <tr>
                              <th>ETC</th>
                              <td>0.000056</td>
                              <td>5.3424984</td>
                            </tr>
                            <tr>
                              <th>LTC</th>
                              <td>0.0000234</td>
                              <td>4.3456600</td>
                            </tr>
                            <tr>
                              <th>XMR</th>
                              <td>0.0000234</td>
                              <td>4.3456600</td>
                            </tr>
                            <tr>
                              <th>BIT</th>
                              <td>0.0000567</td>
                              <td>4.3456600</td>
                            </tr>
                            <tr>
                              <th>EGF</th>
                              <td>0.0000234</td>
                              <td>4.3456600</td>
                            </tr>
                            <tr>
                              <th>EER</th>
                              <td>0.0000567</td>
                              <td>4.3456600</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            {/* buy/sell forms */}
            <div className="col-xl-5">
              <div className="crypt-boxed-area">
                <h6 className="crypt-bg-head"><b className="crypt-up">BUY</b> / <b className="crypt-down">SELL</b></h6>
                <div className="row no-gutters">
                  <div className="col-md-6">
                    <div className="crypt-buy-sell-form">
                      <p>Buy <span className="crypt-up">BTC</span> <span className="fright">Available: <b className="crypt-up">20 BTC</b></span></p>
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
                        <div>
                          <p>Fee: <span className="fright">100%x0.2 = 0.02</span></p>
                        </div>
                        <div className="text-center mt-3 mb-3 crypt-up">
                          <p>You will approximately pay</p>
                          <h4>0.09834 BTC</h4>
                        </div>
                        <div className="menu-green">
                          <a href="#/buy" className="crypt-button-green-full">Buy</a>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="crypt-buy-sell-form">
                      <p>Sell <span className="crypt-down">BTC</span> <span className="fright">Available: <b className="crypt-down">20 BTC</b></span></p>
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
                        <div>
                          <p>Fee: <span className="fright">100%x0.2 = 0.02</span></p>
                        </div>
                        <div className="text-center mt-3 mb-3 crypt-down">
                          <p>You will approximately pay</p>
                          <h4>0.09834 BTC</h4>
                        </div>
                        <div>
                          <a href="#/sell" className="crypt-button-red-full">Sell</a>
                        </div>
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
  return {
    currencies:state.currencies,
    balance:state.balance,
    marketData:state.marketData,
    tickerData:state.tickerData,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchTradeData: () => dispatch(fetchTradeData()),
    fetchHistory : ()  => dispatch(fetchHistory())
    
  };
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(TradePage);

