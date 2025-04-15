import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ThemeState } from "./useThemeStore.type";

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: "light",
      toggleTheme: () => {
        const newTheme = get().theme === "dark" ? "light" : "dark";
        set({ theme: newTheme });
      },
    }),
    {
      name: "theme-storage",
    }
  )
);
