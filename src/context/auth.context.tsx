import {
  FunctionComponent,
  PropsWithChildren,
  createContext,
  useState,
  useEffect,
} from "react";
import { useFirebase } from "../hooks";
import { User } from "../data/schema";
import { useGetUser } from "../data/useGetUser.ts";

export type UserState =
  | { state: "idle"; user?: never; token?: never }
  | { state: "loading"; user?: never; token?: never }
  | { state: "unregistered"; user?: never; token: string }
  | { state: "authenticated"; user: User; token: string }
  | { state: "unauthenticated"; user?: never; token?: never };

export const AuthContext = createContext<{
  state: UserState;
  loginWithGoogle: () => Promise<void>;
  loginWithEmail: (email: string, password: string) => Promise<void>;
  registerWithEmail: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}>({
  state: { state: "idle" },
  loginWithGoogle: async () => {},
  loginWithEmail: async (_email: string, _password: string) => {},
  registerWithEmail: async (_email: string, _password: string) => {},
  signOut: async () => {},
});

export const AuthProvider: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const {
    state: authState,
    loginWithGoogle,
    loginWithEmail,
    register,
    logout,
  } = useFirebase();

  const { data } = useGetUser({
    enabled: Boolean(authState.user?.accessToken),
    retry: false,
  });

  const [userState, setUserState] = useState<UserState>({ state: "idle" });

  useEffect(() => {
    if (authState.state === "unauthenticated") {
      setUserState({ state: "unauthenticated" });
      return;
    }

    if (authState?.state === "idle" || authState?.state === "loading") {
      return;
    }

    if (!data) {
      setUserState({
        state: "unregistered",
        token: authState.user.accessToken,
      });
      return;
    }

    setUserState({
      state: "authenticated",
      user: data as never,
      token: authState.user.accessToken,
    });
  }, [data, authState]);

  const signOut = async () => {
    await logout();

    setUserState({ state: "unauthenticated" });
  };

  return (
    <AuthContext.Provider
      value={{
        state: userState,
        loginWithGoogle: async () => {
          setUserState({ state: "loading" });

          await loginWithGoogle();
        },
        loginWithEmail: async (email, password) => {
          setUserState({ state: "loading" });

          await loginWithEmail(email, password);
        },
        registerWithEmail: async (email, password) => {
          setUserState({ state: "loading" });

          await register(email, password);
        },
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
