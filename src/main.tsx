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

const app = firebase.initializeApp({
  apiKey: "AIzaSyBOYZF5D4vmf2Pr3hCIiFqEpvhGYJ66WIU",
  authDomain: "semiprose-d6dd4.firebaseapp.com",
  projectId: "semiprose-d6dd4",
  storageBucket: "semiprose-d6dd4.appspot.com",
  messagingSenderId: "737919053038",
  appId: "1:737919053038:web:46e4db422eb5851f5c57ff",
  measurementId: "G-PZVVVYXYKL",
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <FeatureProvider>
        <FirebaseProvider app={app}>
          <AuthProvider>
            <App />
          </AuthProvider>
        </FirebaseProvider>
      </FeatureProvider>
    </ThemeProvider>
  </React.StrictMode>
);
