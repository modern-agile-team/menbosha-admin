import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { AuthStore } from "./types";

export const useAuthStore = create(
  persist<AuthStore>(
    (set, get) => ({
      login: false,
      setLogin: () => set({ login: true }),
      setLogout: () => set({ login: false })
    }),
    {
      name: "login-state", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage) // (optional) by default, 'localStorage' is used
    }
  )
);
