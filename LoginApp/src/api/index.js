import axios from "axios";

const HEADERS = {
  "Content-Type": "application/json",
  Accept: "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "Origin, X-Requested-With, Content-Type, Accept",
};

const HEADERS_MUlTIPLE_PART = {
  ...HEADERS,
  "Content-Type": "multipart/form-data; boundary=something",
  Accept: "multipart/form-data",
};

const baseURL = "http://localhost:3000";

export const getURL = (url) => {
  if (url.startsWith("http")) {
    return url;
  }
  return baseURL + url;
};

const setToken = (accessToken) => {
  HEADERS.Authorization = `Bearer ${accessToken}`;
  HEADERS_MUlTIPLE_PART.Authorization = `Bearer ${accessToken}`;
};

const clearToken = () => {
  delete HEADERS.Authorization;
  delete HEADERS_MUlTIPLE_PART.Authorization;
};

const api = {
  get: (url, params = {}) => {
    return axios.get(getURL(url),  {
      params,
      headers: HEADERS,
    });
  },

  post: (url, params) => {
    if(params){
      return axios.post(getURL(url), params, {
        headers: HEADERS,
      });
    }else{
      return axios.post(getURL(url),{
        headers: HEADERS
      })
    }
    
  },

  patch: (url, params) => {
    return axios.patch(getURL(url), params, {
      headers: HEADERS,
    });
  },

  postMultiplePart: (url, params) => {
    return axios.post(getUrl(url), params, {
      headers: HEADERS_MULTIPLE_PART,
    });
  },
};

export const baseApi = (model) => {
  const getAll = (query) => api.get(`${model}`, query);
  const add = (data) => api.post(`${model}`, data);
  const edit = (data) => api.patch(data);
  return {
    getAll,
    add,
    edit,
  };
};
export default {
  ...api,
  clearToken,
  setToken,
};
