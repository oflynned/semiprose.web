import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import {
  AuthProvider,
  FeatureProvider,
  FirebaseProvider,
  ThemeProvider,
} from "./context";
import firebase from "firebase/compat/app";
import { App } from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const app = firebase.initializeApp({
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
});

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <QueryClientProvider client={client}>
        <FeatureProvider>
          <FirebaseProvider app={app}>
            <AuthProvider>
              <App />
            </AuthProvider>
          </FirebaseProvider>
        </FeatureProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
