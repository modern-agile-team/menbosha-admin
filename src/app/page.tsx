import LoginPage from "@/components/login/LoginPage";
import RootStyleRegistry from "./RootStyleRegistry";
import { Suspense } from "react";
import { ThemeProvider } from "@emotion/react";
import theme from "@/styles/theme";

export default function Home() {
  return (
    <RootStyleRegistry>
      <ThemeProvider theme={theme}>
        <Suspense fallback={<div>Loading...</div>}>
          <LoginPage />
        </Suspense>
      </ThemeProvider>
    </RootStyleRegistry>
  );
}
