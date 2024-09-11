import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: "https://pizzayo.vercel.app/api",
});
