import axios from "axios";

axios.defaults.baseURL = process.env.API_URL;
if (process.env.APP_ID) {
  axios.defaults.headers.common["app-id"] = process.env.APP_ID;
}
axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.request.use(
  (request) => {
    console.log(request);
    // Edit request config
    return request;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    console.log(response);
    // Edit response config
    return response;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);
