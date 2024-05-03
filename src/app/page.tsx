/** @jsxImportSource @emotion/react */
"use client";

import { ThemeProvider, css } from "@emotion/react";
import RootStyleRegistry from "./RootStyleRegistry";
import LoginPage from "@/components/login/LoginPage";
import Link from "next/link";

const theme = {
  colors: {
    primary: "hotpink"
  }
};

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}
