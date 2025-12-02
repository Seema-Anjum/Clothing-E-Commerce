import axios from "axios";

const api = axios.create({
  baseURL: "https://e-commerce-backend-pxls.onrender.com",   // backend
  withCredentials: true               // for cookies (JWT)
});

export default api;
