/** @jsxImportSource @emotion/react */
"use client";

import Link from "next/link";
import * as S from "@/styles/header/navigate-styles";

const NavigateBar = () => {
  return (
    <div css={S.LogoContainer}>
      <div css={S.LogoBox}>로고</div>
      <div css={S.NavigateBarContainer}>
        <Link
          href={{
            pathname: `/ban`
          }}
        >
          벤 유저 목록
        </Link>
        <Link
          href={{
            pathname: `/report`
          }}
        >
          신고 목록
        </Link>
      </div>
    </div>
  );
};

export default NavigateBar;
