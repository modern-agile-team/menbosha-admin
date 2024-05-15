"use client";
import ReportDetailContainer from "@/components/report/ReportDetailContainer";
import { useSearchParams } from "next/navigation";

const ReportDetail = () => {
  const params = useSearchParams();

  return (
    <ReportDetailContainer
      reportId={Number(params.get("id"))}
    ></ReportDetailContainer>
  );
};

export default ReportDetail;
