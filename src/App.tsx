import { Route, Routes } from "react-router";
import { Explore } from "./pages/Explore.tsx";
import { Compose } from "./pages/Compose.tsx";
import { ProtectedRoute } from "./pages/ProtectedRoute.tsx";
import { Settings } from "./pages/Settings.tsx";
import { Notifications } from "./pages/Notifications.tsx";
import { Login } from "./pages/Login.tsx";
import { Homepage } from "./pages/Homepage.tsx";
import { Stories } from "./pages/stories/Stories.tsx";
import { StoryDetail } from "./pages/stories/StoryDetail.tsx";
import { BrowserRouter } from "react-router-dom";

export const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path={"/"} element={<Homepage />} />
      <Route path={"/login"} element={<Login />} />
      <Route element={<ProtectedRoute />}>
        <Route path={"/explore"} element={<Explore />} />
        <Route path={"/compose"} element={<Compose />} />
        <Route path={"/stories"} element={<Stories />} />
        <Route path={"/:id"} element={<StoryDetail />} />
        <Route path={"/notifications"} element={<Notifications />} />
        <Route path={"/settings"} element={<Settings />} />
      </Route>
      <Route path={"*"} element={<p>{"404"}</p>} />
    </Routes>
  </BrowserRouter>
);
