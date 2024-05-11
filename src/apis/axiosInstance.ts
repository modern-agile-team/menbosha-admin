import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  withCredentials: true,
  timeout: 3000, //3초동안 요청 안가면 timeout
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhY2Nlc3NUb2tlbiIsInVzZXJJZCI6MzAsImlhdCI6MTcxNTM5MjczNywiZXhwIjoxNzE1NDE0MzM3fQ.BZd21Tv57ZNiMFk26yV-pJVkNOjNZC3vo4Uw2Fjelhk"
  }
});

export default instance;
