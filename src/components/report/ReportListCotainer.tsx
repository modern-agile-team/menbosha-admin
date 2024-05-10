/** @jsxImportSource @emotion/react */
"use client";

import REPORT from "@/apis/report";
import * as S from "@/styles/report-styles/reportStyled";
import { ReportListType, ReportParamsType } from "@/types/report";
import { read } from "fs";
import Link from "next/link";
import { useEffect, useState } from "react";

const ReportListContainer = () => {
  const [getPageCount, setPageCount] = useState(1);
  const [getTotalPage, setTotalPage] = useState(1);
  const [getReportList, setReportList] = useState<
    ReportListType["reportsItemDto"]
  >([]);

  const ReportPagination = async () => {
    const params: ReportParamsType = {
      page: getPageCount,
      pageSize: 5
    };
    const result = await REPORT.ReportList(params);
    setTotalPage(result.lastPage);
    setReportList(result.reportsItemDto);
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
        {getReportList.map((data) => {
          return (
            <Link
              href={{
                pathname: `/report/detail`,
                query: {
                  id: data.id
                }
              }}
              css={{
                textDecoration: "none",
                color: "#000"
              }}
            >
              <div key={data.id} css={S.ReportGrid}>
                <div>{data.id}</div>
                <div>{data.reportUserId}</div>
                <div>{data.reportedUserId}</div>
                <div>{data.type}</div>
                <div>{data.createdAt.slice(0, 10)}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ReportListContainer;
