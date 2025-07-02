import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE==="development"?import.meta.VITE_SERVER_URL:"/api/v1",
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials:true,
});

export default axiosInstance;