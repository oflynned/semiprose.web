import stylesheet from "~/tailwind.css?url";

import type {
  LinksFunction,
  MetaFunction,
  LoaderFunctionArgs,
} from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { useTheme } from "~/hooks";
import { ThemeProvider } from "./context";
import { getFeatures } from "~/features";
import { APP_NAME, TAGLINE } from "~/constants";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
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
  const features = await getFeatures();

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
