"use client";
import BanDetailContainer from "@/components/ban/BanDetailContainer";
import NavigateBar from "@/components/header/NavigateBar";
import { useSearchParams } from "next/navigation";

const BanDetailPage = () => {
  const params = useSearchParams();

  return (
    <div>
      <NavigateBar />
      <BanDetailContainer banId={Number(params.get(""))} />
    </div>
  );
};

export default BanDetailPage;
