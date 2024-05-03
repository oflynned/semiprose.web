import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { FeatureProvider, FirebaseProvider, ThemeProvider } from "./context";
import { Homepage } from "./pages/Homepage";
import { Login } from "./pages/Login";
import { Explore } from "./pages/Explore";
import { Compose } from "./pages/Compose";
import { Waitlist } from "./features";
import { Stories } from "./pages/stories";
import { StoryDetail } from "./pages/stories/slugId";
import { Notifications } from "./pages/Notifications";
import firebase from "firebase/compat/app";
import { Settings } from "./pages/Settings";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBOYZF5D4vmf2Pr3hCIiFqEpvhGYJ66WIU",
  authDomain: "semiprose-d6dd4.firebaseapp.com",
  projectId: "semiprose-d6dd4",
  storageBucket: "semiprose-d6dd4.appspot.com",
  messagingSenderId: "737919053038",
  appId: "1:737919053038:web:46e4db422eb5851f5c57ff",
  measurementId: "G-PZVVVYXYKL",
});

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
    path: "/settings",
    element: <Settings />,
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
        <FirebaseProvider app={app}>
          <RouterProvider router={router} />
        </FirebaseProvider>
      </FeatureProvider>
    </ThemeProvider>
  </React.StrictMode>
);
