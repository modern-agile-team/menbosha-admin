import { AxiosResponse } from "axios";
import instance from "./axiosInstance";
import {
  ReportDetailType,
  ReportListType,
  ReportParamsType
} from "@/types/report";

const REPORT = {
  path: "/admins/reports",

  async ReportList(params: ReportParamsType): Promise<ReportListType> {
    //undefined가 아닌 값만 추가
    const queryParams = Object.fromEntries(
      Object.entries(params).filter(([_, value]) => value !== undefined)
    );
    const result: AxiosResponse<any> = await instance.get(`${REPORT.path}`, {
      params: queryParams
    });
    return result.data.contents;
  },

  async ReportDetail(reportId: number): Promise<ReportDetailType> {
    const result: AxiosResponse<any> = await instance.get(
      `${REPORT.path}/${reportId}`
    );
    return result.data.contents;
  },

  async RemoveReportInfo(reportId: number): Promise<any> {
    const result: AxiosResponse<any> = await instance.delete(
      `${REPORT.path}/${reportId}`
    );
    return result;
  }
};

export default REPORT;
