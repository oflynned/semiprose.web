import { FunctionComponent } from "react";
import { Navigate, Outlet } from "react-router";
import { Layout, Spinner } from "../design-system";
import { useAuth } from "../hooks/useAuth.ts";

type Props = {
  redirectTo?: string;
};

export const ProtectedRoute: FunctionComponent<Props> = ({
  redirectTo = "/login",
}) => {
  const { state } = useAuth();

  if (state.state === "idle" || state.state === "loading") {
    return (
      <div className={"h-screen w-screen flex justify-center items-center"}>
        <Spinner />
      </div>
    );
  }

  if (state.state === "unauthenticated") {
    return <Navigate to={redirectTo} replace />;
  }

  return (
    <Layout user={state.user}>
      <Outlet />
    </Layout>
  );
};
