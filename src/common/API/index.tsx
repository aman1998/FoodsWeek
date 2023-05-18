import axios from "axios";

import { baseURL, token } from "./constants";

const instance = axios.create({
  baseURL: `${baseURL}`,
  params: {
    token,
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
