import { AxiosResponse } from "axios";
import instance from "./axiosInstance";

const USER = {
  path: "/user",

  async ReportUserInfo(userId: number): Promise<any> {
    const result: AxiosResponse<any> = await instance.get(
      `${USER.path}/${userId}/info`
    );
    return result.data;
  }
};

export default USER;
