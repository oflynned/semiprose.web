import {
  FunctionComponent,
  PropsWithChildren,
  createContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { User } from "../types";
import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";

// type UserResponse = {
//   id: string;
//   name: string;
//   email: string;
//   username: string;
//   createdAt: string;
//   lastActiveAt: string;
// };

const createUser = async (token?: string) =>
  fetch("http://localhost:3002/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      username: "oflynned",
    }),
  });

const getUser = async (token: string) =>
  fetch("http://localhost:3002/users/me", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

export const FirebaseContext = createContext<{
  user?: User;
  login: () => void;
  register: () => void;
}>({
  login: () => {},
  register: () => {},
});

type Props = {
  app: firebase.app.App;
};

export const FirebaseProvider: FunctionComponent<PropsWithChildren<Props>> = ({
  app,
  children,
}) => {
  const [token, setToken] = useState<string>();
  const [user, setUser] = useState<User>();

  const fetchUser = useCallback(async () => {
    if (!token) {
      return;
    }

    const response = await getUser(token);
    const data = await response.json();

    if (data) {
      setUser({
        id: data.id,
        username: data.username,
        initials: data.username.split("").at(0) ?? "",
      });
    } else {
      setUser(undefined);
    }
  }, [token]);

  useEffect(() => {
    fetchUser();
  }, [token]);

  useEffect(() => {
    console.log("user changed", user);
  }, [user]);

  getAuth(app).onAuthStateChanged((user) => {
    user?.getIdToken().then(setToken);
  });

  return (
    <FirebaseContext.Provider
      value={{
        user,
        login: () => fetchUser(),
        register: () => createUser(token),
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
