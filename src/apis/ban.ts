import { AxiosResponse } from "axios";
import instance from "./axiosInstance";
import { BanListType, BanParamsType } from "@/types/ban";

const BAN = {
  path: "/admins/banned-users",
  async BanPaginationApi(params: BanParamsType): Promise<BanListType> {
    //undefined가 아닌 값만 추가
    const queryParams = Object.fromEntries(
      Object.entries(params).filter(([_, value]) => value !== undefined)
    );
    const result: AxiosResponse<any> = await instance.get(`${BAN.path}`, {
      params: queryParams
    });
    return result.data.contents;
  }
};

export default BAN;
