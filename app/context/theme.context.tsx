import type { FunctionComponent, PropsWithChildren } from "react";
import { createContext, useEffect, useLayoutEffect, useState } from "react";
import type { Theme } from "~/types";

export const ThemeContext = createContext<{
  theme: Theme;
  toggleTheme: (preference: Theme) => void;
}>({
  theme: "light",
  toggleTheme: () => {},
});

export const ThemeProvider: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    if (theme) {
      localStorage.setItem("theme", theme);
    } else {
      const persistedTheme = localStorage.getItem("theme");

      setTheme(persistedTheme ? (persistedTheme as Theme) : "light");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme: theme ?? "light",
        toggleTheme: (theme: Theme) => setTheme(theme),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
