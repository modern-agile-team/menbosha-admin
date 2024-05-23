/** @jsxImportSource @emotion/react */

import REPORT from "@/apis/report";
import { ReportDetailType } from "@/types/report";
import { useEffect, useState } from "react";
import ReportUserBox from "./ReportUserBox";
import * as S from "@/styles/report-styles/reportStyled";
import * as G from "@/styles/globals";
import ADMINSUSERS from "@/apis/admin-users";
import { Prosto_One } from "next/font/google";

type ReportDetailPropsType = {
  reportId: number;
};

const ReportDetailContainer = (props: ReportDetailPropsType) => {
  const [getDetailInfo, setDetailInfo] = useState<ReportDetailType>();

  const LoadReportDetailInfo = async () => {
    const result = await REPORT.ReportDetail(props.reportId);
    setDetailInfo(result);
  };

  const userBannedHandler = async (reportId: number, type: number) => {
    switch (type) {
      case 1:
        if (confirm("정말로 밴(정지) 시키시겠습니까?")) {
          await ADMINSUSERS.userBanned(reportId);
        }
        break;
      case 2:
        if (confirm("정말로 신고를 삭제 하시겠습니까?")) {
          await REPORT.RemoveReportInfo(reportId);
        }
        break;
    }
  };

  useEffect(() => {
    LoadReportDetailInfo();
  }, []);

  return (
    <div css={S.ReportDetailContainer}>
      {getDetailInfo && (
        <div>
          <div css={S.ReportedUserBox}>
            <div>
              <div>신고 당한 유저</div>
              <ReportUserBox id={getDetailInfo.reportedUserId}></ReportUserBox>
            </div>
            <div>
              <div css={G.ArrowIcon("LEFT")}></div>
              <div>{getDetailInfo.createdAt.slice(0, 10)}</div>
            </div>
            <div>
              <div>신고한 유저</div>
              <ReportUserBox id={getDetailInfo.reportUserId}></ReportUserBox>
            </div>
          </div>
          <div css={S.BorderLine}></div>
          <div>사유 : [{getDetailInfo.type}]</div>
          <div>{getDetailInfo.reason}</div>
          <div css={S.BorderLine}></div>
          <div css={G.FlexBox({ direction: "row" })}>
            <div
              css={G.ButtonBox}
              onClick={() => userBannedHandler(getDetailInfo.reportedUserId, 1)}
            >
              유저밴
            </div>
            <div
              css={G.ButtonBox}
              onClick={() => userBannedHandler(getDetailInfo.id, 2)}
            >
              신고삭제
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReportDetailContainer;
