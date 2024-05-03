import { APP_NAME, TAGLINE } from "../constants";
import { Button } from "../design-system";

const createUser = async () => {
  return fetch("http://localhost:3002/users", {
    method: "POST",
    headers: {
      Authorization: "Bearer token",
    },
    body: JSON.stringify({
      username: "test",
    }),
  });
};

export const Login = () => {
  return (
    <div className={"w-screen h-screen flex items-center justify-center"}>
      <div className={"w-[512px] h-[512px] bg-blue-50"}>
        <div className={"flex flex-col p-8 justify-between h-full"}>
          <div className={"flex flex-col gap-2"}>
            <h1 className={"font-bold text-4xl"}>{APP_NAME}</h1>
            <p>{TAGLINE}</p>
          </div>
          <div className={"flex gap-2 justify-end"}>
            <Button label={"Create user"} onClick={() => createUser()} />
            <Button
              label={"Get user"}
              onClick={() => {
                fetch("http://localhost:3002/users", {
                  method: "GET",
                  headers: {},
                });
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
