import axios from 'axios';
import { constants, url } from '../helpers';

axios.interceptors.response.use(null, (error) => {
  if ((error.response !== undefined) && (error.response.status === 401)) {
    if (!document.location.pathname.includes('login')) {
      document.location.href = '/login';
    }
  }
  return Promise.reject(error);
});

const getHeaders = () => {
  const authData = localStorage.getObject(constants.AUTH_DATA) || {}
  const token = authData.idToken;
  const bearerToken = `Bearer ${token}`;
  const headers = { Authorization: bearerToken }

  return headers;
}

export const get = relativePath => axios.get(`${url.getApiPath()}/${relativePath}`, { headers: getHeaders() })

export const post = (relativePath, {
  body
}) => axios.post(`${url.getApiPath()}/${relativePath}`, body, {
  headers: getHeaders(),
})

export const put = (relativePath, body) => axios.put(`${url.getApiPath()}/${relativePath}`, body, {
  headers: getHeaders(),
})

export const deleteRequest = (relativePath, data = {}) => axios.delete(`${url.getApiPath()}/${relativePath}`, {
  data, headers: getHeaders()
})
