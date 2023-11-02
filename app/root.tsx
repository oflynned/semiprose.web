import "./tailwind.css";

import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { APP_NAME, TAGLINE } from "~/constants";
import { useTheme } from "~/hooks";
import { ThemeProvider } from "./context";

export const meta: MetaFunction = () => {
  return [{ title: APP_NAME }, { name: "description", content: TAGLINE }];
};
const App = () => {
  const { theme } = useTheme();

  return (
    <html lang="en" className={theme} data-mode={theme}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <LiveReload />
        <Scripts />
      </body>
    </html>
  );
};

export default function AppWithProviders() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}
