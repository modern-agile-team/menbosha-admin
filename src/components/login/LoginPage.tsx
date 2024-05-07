/** @jsxImportSource @emotion/react */
"use client";

import * as S from "@/styles/login-styles/LoginStyled";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div css={S.LoginContainer}>
      <div css={S.LoginBox}>
        <div>로그인</div>
        <Link href="/report" css={S.AuthProviderImg}>
          <div>네이버로그인</div>
        </Link>
        <Link href="/ban" css={S.AuthProviderImg}>
          <div>카카오로그인</div>
        </Link>
        <div css={S.AuthProviderImg}>구글로그인</div>
      </div>
    </div>
  );
};

export default LoginPage;
