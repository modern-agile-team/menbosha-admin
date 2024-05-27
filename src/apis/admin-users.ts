import axios, { AxiosResponse } from "axios";
import instance from "./axiosInstance";

const getNowTime = (BannedDay: number) => {
  let today = new Date();

  // 현재 날짜에 BannedDay를 더해줌
  today.setDate(today.getDate() + BannedDay);

  // 필요한 날짜, 시간 요소들을 가져옴
  let year = today.getFullYear(); // 년도
  let month = today.getMonth() + 1; // 월 (0부터 시작하므로 1 더함)
  let date = today.getDate(); // 날짜
  let hour = today.getHours(); // 시간
  let min = today.getMinutes(); // 분
  let sec = today.getSeconds(); // 초

  // 숫자가 한 자리일 경우 앞에 0을 붙여 두 자리로 맞춤
  const pad = (num: number) => (num < 10 ? "0" + num : num);

  return (
    year +
    "-" +
    pad(month) +
    "-" +
    pad(date) +
    "T" +
    pad(hour) +
    ":" +
    pad(min) +
    ":" +
    pad(sec) +
    "Z"
  );
};

const ADMINSUSERS = {
  path: "/admins/users",

  /**신고된 유저 중 어드민 권한으로 밴 하는 API */
  async userBanned(userId: number, reason: string, day: number): Promise<any> {
    try {
      const result: AxiosResponse<CreateBannedUserBodyDto> =
        await instance.post(`${ADMINSUSERS.path}/${userId}/banned-users`, {
          reason: reason,
          endAt: getNowTime(day)
        });
      return result.data;
    } catch (err) {
      if (axios.isAxiosError(err) && err.response)
        if (err.response.data.message === "user has already been banned.") {
          alert("이미 정지된 사용자 입니다.");
        }
    }
  }
};

export default ADMINSUSERS;
