"use client";
import { useSearchParams } from "next/navigation";

const ReportDetail = () => {
  const params = useSearchParams();

  return <div>{params.get("id")}번 페이지</div>;
};

export default ReportDetail;
