/** @jsxImportSource @emotion/react */
"use client";

import { css } from "@emotion/react";
import RootStyleRegistry from "./RootStyleRegistry";
import LoginPage from "@/components/login/LoginPage";

export default function Home() {
  return (
    <RootStyleRegistry>
      <main
        css={[
          css`
            margin: 0px;
            padding: 0px;
            line-height: 1;
            box-sizing: border-box;
          `
        ]}
      >
        <LoginPage />
      </main>
    </RootStyleRegistry>
  );
}
