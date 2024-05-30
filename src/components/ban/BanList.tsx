/** @jsxImportSource @emotion/react */
"use client";

import BAN from "@/apis/ban";
import * as S from "@/styles/report-styles/reportStyled";
import Link from "next/link";
import { useEffect, useState } from "react";
import ReportUserBox from "../report/ReportUserBox";
import { BanListType, BanParamsType } from "@/types/ban";

const BanListContainer = () => {
  const [getPageCount, setPageCount] = useState(1);
  const [getTotalPage, setTotalPage] = useState(1);
  const [getBanList, setBanList] = useState<BanListType["bannedUsersItemDto"]>(
    []
  );

  const ReportPagination = async () => {
    const params: BanParamsType = {
      page: getPageCount,
      pageSize: 2
    };
    const result = await BAN.BanPaginationApi(params);
    setTotalPage(result.lastPage);
    setBanList(result.bannedUsersItemDto);
  };

  useEffect(() => {
    ReportPagination();
  }, [getPageCount]);

  const paginationBar = () => {
    const page = [];
    for (let i = 0; i < getTotalPage; i++) {
      page.push(
        <div
          css={S.PaginationElement(getPageCount, i + 1)}
          onClick={() => setPageCount(i + 1)}
          key={i}
        >
          {i + 1}
        </div>
      );
    }
    return page;
  };

  const PrevNextBtnHandler = (type: string) => {
    if (type === "prev") {
      if (getPageCount <= 1) {
        setPageCount(getTotalPage);
      } else {
        setPageCount((prev) => prev - 1);
      }
    } else {
      if (getPageCount >= getTotalPage) {
        setPageCount(1);
      } else {
        setPageCount((prev) => prev + 1);
      }
    }
  };
  return (
    <div>
      <div css={S.ReportContainer}>
        <div>
          <div css={S.ReportGrid}>
            <div>번호</div>
            <div>밴 당한 유저 아이디</div>
            <div>유저 이름</div>
            <div>밴 한 어드민</div>
            <div>밴 한 어드민 이름</div>
            <div>밴 당한 시간</div>
            <div>밴 만료 시간</div>
          </div>
          <div css={S.ReportListContainer}>
            {getBanList.map((data) => {
              return (
                <Link
                  href={{
                    pathname: `/ban/detail`,
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
                    <div>{data.bannedUserId}</div>
                    <ReportUserBox id={data.bannedUserId}></ReportUserBox>
                    <div>{data.banUserId}</div>
                    <ReportUserBox id={data.banUserId}></ReportUserBox>
                    <div>{data.bannedAt.slice(0, 10)}</div>
                    <div>{data.endAt.slice(0, 10)}</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div css={S.PaginationContainer}>
        <div onClick={() => PrevNextBtnHandler("prev")}>&lt;</div>
        <div css={S.PaginationElementContainer}>{paginationBar()}</div>
        <div onClick={() => PrevNextBtnHandler("next")}>&gt;</div>
      </div>
    </div>
  );
};

export default BanListContainer;
