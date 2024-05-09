import {
  FunctionComponent,
  PropsWithChildren,
  createContext,
  useState,
  useEffect,
} from "react";
import { useFirebase } from "../hooks";
import { getUser } from "../data/get-user.ts";
import { User } from "../data/schema";

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
  state: { state: "loading" },
  loginWithGoogle: async () => {},
  loginWithEmail: async (_email: string, _password: string) => {},
  registerWithEmail: async (_email: string, _password: string) => {},
  signOut: async () => {},
});

export const AuthProvider: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const { state, loginWithGoogle, loginWithEmail, register, logout } =
    useFirebase();
  const [userState, setUserState] = useState<UserState>({ state: "idle" });

  useEffect(() => {
    console.log({ userState });
  }, [userState]);

  useEffect(() => {
    if (state.state === "unauthenticated") {
      setUserState({ state: "unauthenticated" });
      return;
    }

    if (state?.state === "idle" || state?.state === "loading") {
      return;
    }

    if (state?.state === "authenticated") {
      getUser(state.user.accessToken)
        .then((user) => {
          setUserState({
            state: "authenticated",
            user,
            token: state.user.accessToken,
          });
        })
        .catch((e) => {
          console.error(e);

          // TODO guess we need a state where you have a firebase account but no user account yet
          //      eg something like "unregistered" or "unclaimed"
          //      also need to differentiate between errors in zod type vs errors in the request
          setUserState({
            state: "unregistered",
            token: state.user.accessToken,
          });
        });
    }
  }, [state]);

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
