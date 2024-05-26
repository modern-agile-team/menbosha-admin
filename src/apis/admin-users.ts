import { AxiosResponse } from "axios";
import instance from "./axiosInstance";

const getNowTime = (BannedDay: number) => {
  let today = new Date();

  let year = today.getFullYear(); // 년도
  let month = today.getMonth() + 1; // 월
  let date = today.getDate(); // 날짜
  let hour = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();
  return (
    "/" +
    year +
    "-" +
    month +
    "-" +
    date +
    BannedDay +
    "T" +
    hour +
    ":" +
    min +
    ":" +
    sec +
    "Z/"
  );
};

const ADMINSUSERS = {
  path: "/admins/users",

  /**신고된 유저 중 어드민 권한으로 밴 하는 API */
  async userBanned(
    userId: number,
    reason: string,
    day: number
  ): Promise<CreateBannedUserBodyDto> {
    const result: AxiosResponse<any> = await instance.post(
      `${ADMINSUSERS.path}/${userId}/banned-users`,
      {
        reason: reason,
        endAt: getNowTime(day)
      }
    );
    return result.data;
  }
};

export default ADMINSUSERS;
