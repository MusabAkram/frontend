import axiosInstance from './requestBuilder';


export const postNewWithdraws = data => {
  return axiosInstance.post('/api/v1/account/withdraws', data)
    .then(response => response.data);
};
