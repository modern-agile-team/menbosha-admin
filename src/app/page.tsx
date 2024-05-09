import LoginPage from "@/components/login/LoginPage";
import RootStyleRegistry from "./RootStyleRegistry";
import { Suspense } from "react";

export default function Home() {
  return (
    <RootStyleRegistry>
      <Suspense fallback={<div>Loading...</div>}>
        <LoginPage />
      </Suspense>
    </RootStyleRegistry>
  );
}
