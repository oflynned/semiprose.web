import { FunctionComponent, PropsWithChildren } from "react";
import { useFirebase } from "../hooks";
import { Layout } from "../design-system";

export const ProtectedRoute: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const { user } = useFirebase();

  return <Layout user={user}>{children}</Layout>;
};
