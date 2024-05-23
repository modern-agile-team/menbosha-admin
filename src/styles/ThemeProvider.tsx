"use client";

import { ReactNode } from "react";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import theme from "./theme";

type Props = {
  children: ReactNode;
};

const ThemeProvider = ({ children }: Props) => {
  return <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>;
};

export default ThemeProvider;
