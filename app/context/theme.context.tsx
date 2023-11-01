import type { FunctionComponent, PropsWithChildren } from "react";
import { createContext, useContext, useEffect, useState } from "react";
import type { Theme } from "~/types";

const ThemeContext = createContext<{
  theme: Theme;
  toggleTheme: (preference: Theme) => void;
}>({
  theme: "light",
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const persistedTheme = window.localStorage.getItem("theme");

    setTheme(persistedTheme ? (persistedTheme as Theme) : "light");
  }, []);

  const toggleTheme = (preference: Theme) => {
    setTheme(preference);
  };

  useEffect(() => {
    if (theme === "system") {
      const prefersDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      setTheme(prefersDarkMode ? "dark" : "light");
    }
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
