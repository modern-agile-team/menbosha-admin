/** @jsxImportSource @emotion/react */

import * as S from "@/styles/login-styles/LoginStyled";

const LoginPage = () => {
  return (
    <div css={S.LoginContainer}>
      <div css={S.LoginBox}>
        <div>로그인</div>
        <div css={S.AuthProviderImg}>네이버로그인</div>
        <div css={S.AuthProviderImg}>카카오로그인</div>
        <div css={S.AuthProviderImg}>구글로그인</div>
      </div>
    </div>
  );
};

export default LoginPage;
