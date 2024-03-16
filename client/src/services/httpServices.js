import axios from "axios";

const BASE_URL = "https://kajutan-bk.onrender.com";
// const BASE_URL = "http://localhost:8001";
const app = axios.create({
  baseURL: BASE_URL,
  // withCredentials: true,
});

const http = {
  get: app.get,
  post: app.post,
  delete: app.delete,
  put: app.put,
  patch: app.patch,
};

export default http;
