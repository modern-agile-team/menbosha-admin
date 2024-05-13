import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  withCredentials: true,
  timeout: 3000, //3초동안 요청 안가면 timeout
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhY2Nlc3NUb2tlbiIsInVzZXJJZCI6MzAsImlhdCI6MTcxNTU5MTIyMywiZXhwIjoxNzE1NjEyODIzfQ.vId1QTUNmu-pKDf6szwZyOWGI48vpByO0ZyZVx9p3lM"
  }
});

export default instance;
