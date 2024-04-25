import { Google, Kakao, Naver } from "./AuthProvider";

const LoginPage = () => {
  return (
    <div>
      <div>멘보샤 관리자 로그인</div>
      <Naver />
      <Kakao />
      <Google />
    </div>
  );
};

export default LoginPage;
