import {
  FunctionComponent,
  PropsWithChildren,
  createContext,
  useState,
  useEffect,
} from "react";
import firebase from "firebase/compat/app";
import {
  // eslint-disable-next-line import/named
  UserInfo,
  // eslint-disable-next-line import/named
  getAuth,
  // eslint-disable-next-line import/named
  signInWithPopup,
  // eslint-disable-next-line import/named
  signInWithEmailAndPassword,
  // eslint-disable-next-line import/named
  createUserWithEmailAndPassword,
  // eslint-disable-next-line import/named
  GoogleAuthProvider,
} from "firebase/auth";

export const FirebaseContext = createContext<{
  state: AuthState;
  loginWithGoogle: () => Promise<void>;
  loginWithEmail: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}>({
  state: { state: "loading" },
  loginWithGoogle: async () => {},
  loginWithEmail: async (_email: string, _password: string) => {},
  register: async (_email: string, _password: string) => {},
  logout: async () => {},
});

type Credential = UserInfo & { accessToken: string };

type Props = {
  app: firebase.app.App;
};

type AuthState =
  | { state: "idle"; user?: never }
  | { state: "loading"; user?: never }
  | { state: "authenticated"; user: Credential }
  | { state: "unauthenticated"; user?: never };

export const FirebaseProvider: FunctionComponent<PropsWithChildren<Props>> = ({
  app,
  children,
}) => {
  const auth = getAuth(app);
  const [state, setState] = useState<AuthState>({ state: "idle" });

  const register = async (email: string, password: string) => {
    setState({ state: "loading" });

    await createUserWithEmailAndPassword(auth, email, password);
  };

  const loginWithGoogle = async () => {
    setState({ state: "loading" });

    const provider = new GoogleAuthProvider();
    provider.addScope("profile");
    provider.addScope("email");

    try {
      await signInWithPopup(auth, provider);
    } catch (e) {
      await logout();
    }
  };

  const loginWithEmail = async (email: string, password: string) => {
    setState({ state: "loading" });

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (e) {
      await logout();
    }
  };

  const logout = async () => {
    await auth.signOut();

    setState({ state: "unauthenticated" });
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        setState({ state: "unauthenticated" });

        return;
      }

      setState({ state: "loading" });

      user.getIdToken().then(
        (token) => {
          setState({
            state: "authenticated",
            user: { ...user, accessToken: token },
          });
        },
        () => {
          setState({ state: "unauthenticated" });
        },
      );
    });
  }, [auth]);

  return (
    <FirebaseContext.Provider
      value={{
        state,
        loginWithEmail,
        loginWithGoogle,
        register,
        logout,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
