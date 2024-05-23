import { AxiosResponse } from "axios";
import instance from "./axiosInstance";

const ADMINSUSERS = {
  path: "/admins/users",

  /**신고된 유저 중 어드민 권한으로 밴 하는 API */
  async userBanned(userId: number): Promise<CreateBannedUserBodyDto> {
    const result: AxiosResponse<any> = await instance.post(
      `${ADMINSUSERS.path}/${userId}/banned-users`
    );
    return result.data;
  }
};

export default ADMINSUSERS;
