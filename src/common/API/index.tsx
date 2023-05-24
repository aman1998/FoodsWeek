import axios from "axios";

import { baseURL, token } from "./constants";

const instance = axios.create({
  baseURL: `${baseURL}`,
  params: {
    token,
  },
});

export const productsInstance = axios.create({
  baseURL: "https://api.nal.usda.gov/fdc/v1/foods",
  params: {
    api_key: "PoAW266Fl5425HhTv8EmthTomyaoLBHjnhaYINvr",
  },
});

// instance.interceptors.response.use(
//   response => response,
//   error => {
//     if (error.response.status === 404) {
//       window.location.href = "/404";
//     }
//     return Promise.reject(error);
//   }
// );

export default instance;
