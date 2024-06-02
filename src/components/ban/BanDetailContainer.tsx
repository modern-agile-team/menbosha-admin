import BAN from "@/apis/ban";
import { BanDetailPropsType, BanDetailReturnType } from "@/types/ban";
import { useEffect, useState } from "react";

const BanDetailContainer = (props: BanDetailPropsType) => {
  const [getBanDetail, setBanDetail] = useState<BanDetailReturnType>();

  const BanDetailInfoHandler = async () => {
    const result = await BAN.BanDetailApi(props.banId);
    setBanDetail(result);
  };

  useEffect(() => {
    BanDetailInfoHandler();
  }, []);

  return <div>{getBanDetail && <div>{getBanDetail.id}</div>}</div>;
};

export default BanDetailContainer;
