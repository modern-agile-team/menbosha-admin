import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  withCredentials: true,
  timeout: 3000, //3초동안 요청 안가면 timeout
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhY2Nlc3NUb2tlbiIsInVzZXJJZCI6MzAsImlhdCI6MTcxNTIzNTM3MCwiZXhwIjoxNzE1MjU2OTcwfQ.05LWDc87mo37zUWoXAmr4QXvOMty3unf58E-uyn1Paw"
  }
});

export default instance;
