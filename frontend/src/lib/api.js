import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE==="development"?"http://localhost:3800/api/v1":"/api/v1",
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials:true,
});

export default axiosInstance;