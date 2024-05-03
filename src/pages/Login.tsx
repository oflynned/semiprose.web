import { APP_NAME, TAGLINE } from "../constants";
import { Button } from "../design-system";
// eslint-disable-next-line
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useFirebase } from "../hooks";

export const Login = () => {
  const { user, login, register } = useFirebase();

  return (
    <div
      className={"w-screen h-screen flex flex-col items-center justify-center"}
    >
      <pre>{JSON.stringify(user)}</pre>
      <div className={"w-[512px] h-[512px] bg-blue-50"}>
        <div className={"flex flex-col p-8 justify-between h-full"}>
          <div className={"flex flex-col gap-2"}>
            <h1 className={"font-bold text-4xl"}>{APP_NAME}</h1>
            <p>{TAGLINE}</p>
          </div>
          <div className={"flex gap-2 justify-end"}>
            <Button label={"Create user"} onClick={register} />

            <Button label={"Get user"} onClick={login} />

            <Button
              label={"Login with Google"}
              onClick={() => {
                const authProvider = new GoogleAuthProvider();
                authProvider.addScope("profile");
                authProvider.addScope("email");

                getAuth().onAuthStateChanged((user) => {
                  if (user) {
                    console.log(user);
                  } else {
                    console.log("Not logged in");
                  }
                });

                signInWithPopup(getAuth(), authProvider)
                  .then(() => {
                    console.log("Logged in with Google");
                  })
                  .catch((error) => {
                    console.error("Error logging in with Google", error);
                  });
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
