import { FunctionComponent } from "react";
import { Navigate, Outlet } from "react-router";
import { Layout } from "../design-system";
import { useAuth } from "../hooks/useAuth.ts";

type Props = {
  redirectTo?: string;
};

export const ProtectedRoute: FunctionComponent<Props> = ({
  redirectTo = "/login",
}) => {
  const { state } = useAuth();

  if (state.state === "loading") {
    return (
      <div className={"h-screen w-screen flex justify-center items-center"}>
        <p>{"Loading..."}</p>
      </div>
    );
  }

  if (state.state === "unauthenticated") {
    return <Navigate to={redirectTo} replace />;
  }

  console.log(state.user);

  return (
    <Layout user={state.user}>
      <Outlet />
    </Layout>
  );
};
