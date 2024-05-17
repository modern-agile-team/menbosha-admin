import LoginPage from "@/components/login/LoginPage";
import RootStyleRegistry from "./RootStyleRegistry";
import { Suspense } from "react";
import ThemeProvider from "@/styles/ThemeProvider";

export default function Home() {
  return (
    <RootStyleRegistry>
      <ThemeProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <LoginPage />
        </Suspense>
      </ThemeProvider>
    </RootStyleRegistry>
  );
}
