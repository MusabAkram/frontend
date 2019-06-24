import axiosInstance from './requestBuilder';

const getBalances = () => {
  return axiosInstance.get('/api/v2/peatio/account/balances')
    .then(response => response.data);
};
const getCurrencies = () => {
  return axiosInstance.get('/api/v2/peatio/public/currencies')
    .then(response => response.data);
};
export const getMarketData = () =>{
  return axiosInstance.get("/api/v2/peatio/public/markets")
  .then(response => response.data);  
}

export const getTickerData = () =>{
  return axiosInstance.get("/api/v2/peatio/public/markets/tickers")
    .then(response => response.data);
}

export const getTradeData = async() =>{
  return await Promise.all([ getCurrencies(),getMarketData(), getTickerData()]);
}