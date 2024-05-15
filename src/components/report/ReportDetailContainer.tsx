import REPORT from "@/apis/report";
import { ReportDetailType } from "@/types/report";
import { useEffect, useState } from "react";
import ReportUserBox from "./ReportUserBox";

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
    <div>
      {getDetailInfo && (
        <div>
          <div>
            <div>신고한 유저</div>
            <ReportUserBox id={getDetailInfo.reportUserId}></ReportUserBox>
          </div>
          <div>
            <div>신고 당한 유저</div>
            <ReportUserBox id={getDetailInfo.reportedUserId}></ReportUserBox>
          </div>
        </div>
      )}
      <div></div>
    </div>
  );
};

export default ReportDetailContainer;
