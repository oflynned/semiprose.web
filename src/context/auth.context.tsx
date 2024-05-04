import {
  FunctionComponent,
  PropsWithChildren,
  createContext,
  useState,
  useEffect,
} from "react";
import { useFirebase } from "../hooks";
import { getUser } from "../data/get-user.ts";
import { UserEntity } from "../data/entity";

export type AuthState =
  | { state: "loading"; user?: never }
  | { state: "authenticated"; user: UserEntity }
  | { state: "unauthenticated"; user?: never };

export const AuthContext = createContext<{
  state: AuthState;
  loginWithGoogle: () => Promise<void>;
  loginWithEmail: (email: string, password: string) => Promise<void>;
  registerWithEmail: (email: string, password: string) => Promise<void>;
  logout: () => void;
}>({
  state: { state: "loading" },
  loginWithGoogle: async () => {},
  loginWithEmail: async (_email: string, _password: string) => {},
  registerWithEmail: async (_email: string, _password: string) => {},
  logout: () => {},
});

export const AuthProvider: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const {
    token,
    loginWithEmail: firebaseLoginWithEmail,
    loginWithGoogle: firebaseLoginWithGoogle,
    register: registerWithFirebase,
    logout: logoutOnFirebase,
  } = useFirebase();
  const [state, setState] = useState<AuthState>({ state: "loading" });

  useEffect(() => {
    if (token) {
      getUser(token)
        .then((user) => {
          setState({ state: "authenticated", user: user as any });
        })
        .catch(() => {
          setState({ state: "unauthenticated" });
        });
    }
  }, [token]);

  const register = async (email: string, password: string) => {
    try {
      const user = await registerWithFirebase(email, password);
      setState({ state: "authenticated", user: user as any });
    } catch (e) {
      setState({ state: "unauthenticated" });
    }
  };

  const logout = () => {
    setState({ state: "unauthenticated" });
    logoutOnFirebase();
  };

  return (
    <AuthContext.Provider
      value={{
        state,
        loginWithGoogle: async () => {
          setState({ state: "loading" });

          await firebaseLoginWithGoogle();
        },
        loginWithEmail: async (email, password) => {
          setState({ state: "loading" });

          await firebaseLoginWithEmail(email, password);
        },
        registerWithEmail: async (email, password) => {
          await registerWithFirebase(email, password);
        },
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
