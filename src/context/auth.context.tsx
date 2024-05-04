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
import firebase from "firebase/compat/app";

export type UserState =
  | { state: "idle"; user?: never }
  | { state: "loading"; user?: never }
  | { state: "authenticated"; user: UserEntity }
  | { state: "unauthenticated"; user?: never };

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
    console.log("token state change", state);
    console.log("user state change", userState);

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
          setUserState({ state: "authenticated", user });
        })
        .catch(() => {
          setUserState({ state: "unauthenticated" });
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
