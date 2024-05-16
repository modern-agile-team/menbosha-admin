import "@emotion/react";
import { theme } from "./theme";

type ThemeType = "bg" | "text" | "main";

declare module "@emotion/react" {
  export interface Theme {
    [key in ThemeType]: {
      primary: string;
    };
  }
}
