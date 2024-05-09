/** @jsxImportSource @emotion/react */
"use client";

import REPORT from "@/apis/report";
import * as S from "@/styles/report-styles/reportStyled";
import { ReportListType, ReportParamsType } from "@/types/report";
import { useEffect, useState } from "react";

const ReportListContainer = () => {
  const [getPageCount, setPageCount] = useState(1);
  const [getTotalPage, setTotalPage] = useState(1);
  const [getReportList, setReportList] = useState<
    ReportListType["ReportPaginationResponseDto"]["reportsItemDto"]
  >([]);

  const ReportPagination = async () => {
    const params: ReportParamsType = {
      page: getPageCount,
      pageSize: 5
    };
    const result = await REPORT.ReportList(params);
    // setTotalPage(result.ReportPaginationResponseDto.lastPage);
    // setReportList(result.ReportPaginationResponseDto.reportsItemDto);
    console.log(result);
  };

  useEffect(() => {
    ReportPagination();
  }, []);

  return (
    <div css={S.ReportContainer}>
      <div>
        <div>신고</div>
        <div css={S.ReportGrid}>
          <div>id</div>
          <div>신고한 유저</div>
          <div>신고당한 유저</div>
          <div>신고 종류</div>
          <div>신고 시각</div>
        </div>
      </div>
    </div>
  );
};

export default ReportListContainer;
