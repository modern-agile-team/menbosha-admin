"use client";
import NavigateBar from "@/components/header/NavigateBar";
import ReportDetailContainer from "@/components/report/ReportDetailContainer";
import { useSearchParams } from "next/navigation";

const ReportDetail = () => {
  const params = useSearchParams();

  return (
    <div>
      <NavigateBar />
      <ReportDetailContainer
        reportId={Number(params.get("id"))}
      ></ReportDetailContainer>
    </div>
  );
};

export default ReportDetail;
