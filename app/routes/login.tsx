import { APP_NAME, TAGLINE } from "~/constants";

export default function Login() {
  return (
    <div className={"flex justify-center items-center h-screen w-screen"}>
      <div className={"h-[512px] w-[512px] bg-red-50"}>
        <h1 className={"font-bold text-4xl"}>{APP_NAME}</h1>
        <h3>{TAGLINE}</h3>
      </div>
    </div>
  );
}
