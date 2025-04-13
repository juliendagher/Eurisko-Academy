import { AuthState } from "./useAuthStore.type";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      accessToken: null,
      expiresAt: null,

      setTokens: ({ accessToken, expiresIn }) => {
        const expiresAt = Date.now() + expiresIn * 1000;
        set({ accessToken, expiresAt });
      },

      logout: () => set({ accessToken: null, expiresAt: null }),
    }),
    {
      name: "auth-storage",
    }
  )
);
