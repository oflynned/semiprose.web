import styles from "./tailwind.css";

import type {
  LinksFunction,
  MetaFunction,
  LoaderFunctionArgs,
} from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { APP_NAME, TAGLINE } from "~/constants";
import { useTheme } from "~/hooks";
import { ThemeProvider } from "./context";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  {
    rel: "icon",
    href: "/favicon.svg",
    type: "image/svg",
  },
];

export const meta: MetaFunction = () => {
  return [{ title: APP_NAME }, { name: "description", content: TAGLINE }];
};

export async function loader({ request }: LoaderFunctionArgs) {
  const { pathname } = new URL(request.url);

  const endpoint = new URL(
    "/feature-flags",
    process.env.REACT_APP_API_ENDPOINT
  );
  const flags = await fetch(endpoint);
  const features = await flags.json();

  if (!features["ENABLE_APP"] && pathname !== "/waitlist") {
    return redirect("/waitlist");
  }

  return json({ features });
}

const App = () => {
  const { theme } = useTheme();
  useLoaderData<typeof loader>();

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
