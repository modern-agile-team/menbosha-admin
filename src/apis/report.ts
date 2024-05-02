import { AxiosResponse } from "axios";
import instance from "./axiosInstance";
import { ReportListType, ReportParamsType } from "@/types/report";

const REPORT = {
  path: "/admin/report",

  async ReportList(params: ReportParamsType): Promise<ReportListType> {
    //undefined가 아닌 값만 추가
    const queryParams = Object.fromEntries(
      Object.entries(params).filter(([_, value]) => value !== undefined)
    );
    const result: AxiosResponse = await instance.get(`${REPORT.path}`, {
      params: queryParams
    });
    return result.data;
  }
};