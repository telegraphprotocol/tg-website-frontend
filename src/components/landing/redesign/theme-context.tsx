"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

const STORAGE_KEY = "tg-redesign-theme";

type Theme = "dark" | "light";

const RedesignThemeContext = createContext<{
  theme: Theme;
  setTheme: (theme: Theme) => void;
}>({
  theme: "dark",
  setTheme: () => {},
});

export function RedesignThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark") setTheme(stored);
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  return (
    <RedesignThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </RedesignThemeContext.Provider>
  );
}

export function useRedesignTheme() {
  return useContext(RedesignThemeContext);
}
