import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { FeatureProvider, ThemeProvider } from "./context";
import { Homepage } from "./pages/Homepage";
import { Login } from "./pages/Login";
import { Explore } from "./pages/Explore";
import { Compose } from "./pages/Compose";
import { Waitlist } from "./features";
import { Stories } from "./pages/stories";
import { StoryDetail } from "./pages/stories/slugId";
import { Notifications } from "./pages/Notifications";

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
      <FeatureProvider>
        <RouterProvider router={router} />
      </FeatureProvider>
    </ThemeProvider>
  </React.StrictMode>
);
