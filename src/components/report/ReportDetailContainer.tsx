/** @jsxImportSource @emotion/react */

import REPORT from "@/apis/report";
import { ReportDetailType } from "@/types/report";
import { useEffect, useState } from "react";
import ReportUserBox from "./ReportUserBox";
import * as S from "@/styles/report-styles/reportStyled";

type ReportDetailPropsType = {
  reportId: number;
};

const ReportDetailContainer = (props: ReportDetailPropsType) => {
  const [getDetailInfo, setDetailInfo] = useState<ReportDetailType>();

  const LoadReportDetailInfo = async () => {
    const result = await REPORT.ReportDetail(props.reportId);
    setDetailInfo(result);
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
              <div>신고한 유저</div>
              <ReportUserBox id={getDetailInfo.reportUserId}></ReportUserBox>
            </div>
            <div>
              <div>신고 당한 유저</div>
              <ReportUserBox id={getDetailInfo.reportedUserId}></ReportUserBox>
            </div>
          </div>
          <div>이유 : {getDetailInfo.reason}</div>
        </div>
      )}
      <div></div>
    </div>
  );
};

export default ReportDetailContainer;
