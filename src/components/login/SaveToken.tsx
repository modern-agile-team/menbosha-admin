import { useEffect } from "react";

import AUTH from "@/apis/auth";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";

interface Company {
  provider: string;
}

const SaveToken = ({ provider }: Company) => {
  const router = useRouter();
  const { setLogin } = useAuthStore();

  const getToken = async () => {
    try {
      const code = new URL(window.location.href).searchParams.get("code");

      const result = await AUTH.getToken(provider, code as string);
      localStorage.setItem("accessToken", result.accessToken);
      localStorage.setItem("provider", provider);
      setLogin();
    } catch (err) {
      alert("로그인 도중 오류가 발생했습니다");
      console.log(err);
    }
  };

  useEffect(() => {
    getToken();
  }, []);

  return (
    <div>
      <div>로딩중...</div>
    </div>
  );
};

export default SaveToken;
