import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  withCredentials: true,
  timeout: 3000, //3초동안 요청 안가면 timeout
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhY2Nlc3NUb2tlbiIsInVzZXJJZCI6MzAsImlhdCI6MTcxNTMwMzg1OCwiZXhwIjoxNzE1MzI1NDU4fQ.llKusyVJlZgtDGV0i6QKOQk8dNE71THPwrZhm-yfnN4"
  }
});

export default instance;
