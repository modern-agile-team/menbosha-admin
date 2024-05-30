import BanListContainer from "@/components/ban/BanList";
import NavigateBar from "@/components/header/NavigateBar";
import ReportListContainer from "@/components/report/ReportListCotainer";

const BanPage = () => {
  return (
    <div>
      <NavigateBar />
      <BanListContainer />
    </div>
  );
};

export default BanPage;
