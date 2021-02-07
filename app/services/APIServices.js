import {config} from '../common';

const makeRequest = async (url, method) => {
  const response = await fetch(`${config.baseURL}/api/${url}`, {
    method,
  });
  const result = await response.json();
  if (response.ok) {
    return result;
  }
  throw result;
};

const APIServices = {
  getProduct: (code) => {
    return makeRequest(code, 'GET');
  },
};

export default APIServices;
