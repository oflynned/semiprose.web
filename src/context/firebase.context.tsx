import {
  FunctionComponent,
  PropsWithChildren,
  createContext,
  useState,
  useMemo,
} from "react";
import firebase from "firebase/compat/app";
import {
  UserInfo,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
} from "firebase/auth";

export type AuthState = "loading" | "authenticated" | "unauthenticated";

export const FirebaseContext = createContext<{
  userInfo?: UserInfo | null;
  token?: string;
  state?: AuthState;
  loginWithGoogle: () => Promise<void>;
  loginWithEmail: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => void;
}>({
  loginWithGoogle: async () => {},
  loginWithEmail: async (_email: string, _password: string) => {},
  register: async (_email: string, _password: string) => {},
  logout: () => {},
});

type Props = {
  app: firebase.app.App;
};

export const FirebaseProvider: FunctionComponent<PropsWithChildren<Props>> = ({
  app,
  children,
}) => {
  const auth = useMemo(() => getAuth(app), [app]);

  const [token, setToken] = useState<string>();
  const [userInfo, setUserInfo] = useState<UserInfo | null>(
    auth.currentUser ? auth.currentUser : null
  );
  const [state, setState] = useState<AuthState>(
    auth.currentUser ? "authenticated" : "unauthenticated"
  );

  const register = async (email: string, password: string) => {
    setState("loading");

    await createUserWithEmailAndPassword(auth, email, password);
  };

  const loginWithGoogle = async () => {
    setState("loading");

    const provider = new GoogleAuthProvider();
    provider.addScope("profile");
    provider.addScope("email");

    try {
      await signInWithPopup(auth, provider);
    } catch (e) {
      setState("unauthenticated");
    }
  };

  const loginWithEmail = async (email: string, password: string) => {
    setState("loading");

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (e) {
      setState("unauthenticated");
    }
  };

  const logout = async () => {
    setState("loading");

    await auth.signOut();

    setUserInfo(null);
    setToken(undefined);
    setState("unauthenticated");
  };

  auth.onAuthStateChanged((user) => {
    setState("loading");
    setUserInfo(user);

    user
      ?.getIdToken()
      .then((token) => {
        setToken(token);
        setState("authenticated");
      })
      .catch(() => {
        setToken(undefined);
        setState("unauthenticated");
      });
  });

  return (
    <FirebaseContext.Provider
      value={{
        userInfo,
        state,
        token,
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
