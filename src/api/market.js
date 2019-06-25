import axiosInstance from './requestBuilder';

export const getMarkets = () => {
    return axiosInstance.get('/api/v2/peatio/public/markets')
      .then(response => response.data);
  };
  