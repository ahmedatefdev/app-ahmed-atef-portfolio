import axios from "axios";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
axios.defaults.baseURL = publicRuntimeConfig.API_URL;
// axios.defaults.headers.common["Authorization"] = "AUTH TOKEN";
// axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.request.use(
  (request) => {
    console.log(request);
    return request;
  },
  (error) => {
    // console.log(error);
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    // console.log(response);
    return response;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

export default axios;
