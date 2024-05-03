import {
  FunctionComponent,
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from "react";
import type { Theme } from "~/types";

export const ThemeContext = createContext<{
  theme: Theme;
  toggleTheme: (theme: Theme) => void;
}>({
  theme: "light",
  toggleTheme: (_theme: Theme) => {},
});

export const ThemeProvider: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme | null>(null);

  const applyTheme = (theme: Theme) => {
    const htmlSelector = document.querySelector("html");

    if (htmlSelector) {
      htmlSelector.classList.remove("light", "dark");
      htmlSelector.classList.add(theme);
    }
  };

  const isValidTheme = (theme?: unknown): theme is Theme =>
    typeof theme === "string" && ["dark", "light", "system"].includes(theme);

  const persistTheme = (theme: Theme) => localStorage.setItem("theme", theme);

  const getInitialTheme = () => localStorage.getItem("theme");

  useEffect(() => {
    const theme = getInitialTheme();

    if (!theme || theme === "system") {
      // apply system theme
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      setTheme(systemTheme);
      applyTheme(systemTheme);
    } else {
      setTheme(theme as Theme);
      applyTheme(theme as Theme);
    }
  }, []);

  useEffect(() => {
    if (theme && isValidTheme(theme)) {
      persistTheme(theme);
      applyTheme(theme);

      return;
    }

    const persistedTheme = localStorage.getItem("theme");

    if (persistedTheme && isValidTheme(persistedTheme)) {
      setTheme(persistedTheme);
      applyTheme(persistedTheme);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme: theme ?? "system",
        toggleTheme: (theme) => setTheme(theme),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
