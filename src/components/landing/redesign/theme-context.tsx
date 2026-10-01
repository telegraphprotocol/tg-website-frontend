"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

const STORAGE_KEY = "tg-redesign-theme";

/** Pages that follow the light/dark toggle. Every other page stays dark. */
export const THEMED_PATHS = ["/", "/whitepaper"];

type Theme = "dark" | "light";

const RedesignThemeContext = createContext<{
  theme: Theme;
  setTheme: (theme: Theme) => void;
}>({
  theme: "light",
  setTheme: () => {},
});

export function RedesignThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [resolved, setResolved] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark") setTheme(stored);
    setResolved(true);
  }, []);

  // Reveal the page (hidden by the pre-paint script) only after the saved theme is rendered
  useEffect(() => {
    if (resolved) document.documentElement.removeAttribute("data-tg-pre-theme");
  }, [resolved]);

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
