"use client";

import { useRouter } from "next/router";
import { useEffect } from "react";

import AUTH from "@/apis/auth";
import { useAuthStore } from "@/store/authStore";

interface Company {
  provider: string;
}

const SaveToken = ({ provider }: Company) => {
  const { setLogin } = useAuthStore();

  return (
    <div>
      <div>로딩중...</div>
    </div>
  );
};

export default SaveToken;
