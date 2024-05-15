import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  withCredentials: true,
  timeout: 3000, //3초동안 요청 안가면 timeout
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACEESS_TOKEN}`
  }
});

export default instance;
