import { APP_NAME, TAGLINE } from "../constants";
import { Button } from "../design-system";
import { useAuth } from "../hooks/useAuth.ts";
import { Navigate } from "react-router";

export const Login = () => {
  const { state, loginWithGoogle, loginWithEmail, registerWithEmail } =
    useAuth();

  if (state.state === "loading") {
    return (
      <div className={"h-screen w-screen flex justify-center items-center"}>
        <p>{"Loading..."}</p>
      </div>
    );
  }

  if (state.state === "authenticated") {
    return <Navigate to={"/explore"} replace />;
  }

  return (
    <div
      className={"w-screen h-screen flex flex-col items-center justify-center"}
    >
      <div className={"w-[512px] h-[512px] bg-blue-50"}>
        <div className={"flex flex-col p-8 justify-between h-full"}>
          <div className={"flex flex-col gap-2"}>
            <h1 className={"font-bold text-4xl"}>{APP_NAME}</h1>
            <p>{TAGLINE}</p>
          </div>
          <div className={"flex gap-2 justify-end"}>
            <Button
              label={"Register with Email"}
              onClick={() =>
                registerWithEmail("oflynned@gmail.com", "password")
              }
            />
            <Button
              label={"Login with Email"}
              onClick={() => loginWithEmail("oflynned@gmail.com", "password")}
            />
            <Button label={"Login with Google"} onClick={loginWithGoogle} />
          </div>
        </div>
      </div>
    </div>
  );
};
