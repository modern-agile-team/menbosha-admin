/** @jsxImportSource @emotion/react */
"use client";

import REPORT from "@/apis/report";
import * as S from "@/styles/report-styles/reportStyled";
import { ReportListType, ReportParamsType } from "@/types/report";
import Link from "next/link";
import { useEffect, useState } from "react";
import ReportUserBox from "./ReportUserBox";

const ReportListContainer = () => {
  const [getPageCount, setPageCount] = useState(1);
  const [getTotalPage, setTotalPage] = useState(1);
  const [getReportList, setReportList] = useState<
    ReportListType["reportsItemDto"]
  >([]);
  const [getUserId, setUserId] = useState({
    reportId: 0,
    reportedId: 0
  });

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
  }, [getPageCount]);

  const paginationBar = () => {
    const page = [];
    for (let i = 0; i < getTotalPage; i++) {
      page.push(
        <div
          css={S.PaginationElement}
          onClick={() => setPageCount(i + 1)}
          key={i}
        >
          {i + 1}
        </div>
      );
    }
    return page;
  };

  return (
    <div>
      <div css={S.ReportContainer}>
        <div>
          <div css={S.ReportGrid}>
            <div>번호</div>
            <div>신고당한 유저 아이디</div>
            <div>신고당한 유저 이름</div>
            <div>신고한 유저 아이디</div>
            <div>신고한 유저 이름</div>
            <div>신고 타입</div>
            <div>신고 시간</div>
          </div>
          <div css={S.ReportListContainer}>
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
                  key={data.id}
                >
                  <div css={S.ReportGrid}>
                    <div>{data.id}</div>
                    <div>{data.reportedUserId}</div>
                    <ReportUserBox id={data.reportedUserId}></ReportUserBox>
                    <div>{data.reportUserId}</div>
                    <ReportUserBox id={data.reportUserId}></ReportUserBox>
                    <div>{data.type}</div>
                    <div>{data.createdAt.slice(0, 10)}</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div css={S.PaginationContainer}>
        <div>&lt;</div>
        <div css={S.PaginationElementContainer}>{paginationBar()}</div>
        <div>&gt;</div>
      </div>
    </div>
  );
};

export default ReportListContainer;
