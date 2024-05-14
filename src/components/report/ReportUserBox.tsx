import USER from "@/apis/user";
import { useEffect, useState } from "react";

type ReportUserPropsType = {
  id: number;
};

const ReportUserBox = (props: ReportUserPropsType) => {
  const [getUserName, setUserName] = useState<string>("");
  const getReportUserInfo = async () => {
    const result = await USER.ReportUserInfo(props.id);
    setUserName(result.name);
  };

  useEffect(() => {
    getReportUserInfo();
  }, []);

  return <div>{getUserName}</div>;
};

export default ReportUserBox;
