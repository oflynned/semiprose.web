import styles from "./tailwind.css";

import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "@remix-run/react";
import { APP_NAME, TAGLINE } from "~/constants";
import { useTheme } from "~/hooks";
import { ThemeProvider } from "./context";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export const meta: MetaFunction = () => {
  return [{ title: APP_NAME }, { name: "description", content: TAGLINE }];
};
const App = () => {
  const { theme } = useTheme();
  const location = useLocation();

  // TODO temporarily disable the rest of the app until we're ready to launch
  if (location.pathname !== "/waitlist") {
    return null;
  }

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
        <Scripts />
        <LiveReload />
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
