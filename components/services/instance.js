import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: "http://pizzayo.vercel.app/api",
});
