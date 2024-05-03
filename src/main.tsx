import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ThemeProvider } from "~/context";
import { Homepage } from "~/pages/Homepage.tsx";
import { Login } from "~/pages/Login.tsx";
import { Explore } from "~/pages/Explore.tsx";
import { Compose } from "~/pages/Compose.tsx";
import { Waitlist } from "~/features";
import { Stories } from "~/pages/stories";
import { StoryDetail } from "~/pages/stories/slugId.tsx";
import { Notifications } from "~/pages/Notifications.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/explore",
    element: <Explore />,
  },
  {
    path: "/compose",
    element: <Compose />,
  },
  {
    path: "/notifications",
    element: <Notifications />,
  },
  {
    path: "/stories",
    element: <Stories />,
  },
  {
    path: "/stories/:id",
    element: <StoryDetail />,
  },
  {
    path: "/waitlist",
    element: <Waitlist />,
  },
  {
    path: "404",
    errorElement: <p>{"Not found"}</p>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
