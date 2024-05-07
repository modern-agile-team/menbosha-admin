/** @jsxImportSource @emotion/react */
"use client";

import * as S from "@/styles/report-styles/reportStyled";

const ReportListContainer = () => {
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
