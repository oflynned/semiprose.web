import { Button, Card } from "~/design-system";
import { useNavigate } from "@remix-run/react";

export default function Index() {
  const navigate = useNavigate();

  return (
    <div className={"w-screen h-screen flex items-center justify-center"}>
      <div className={"w-[512px] h-[512px] bg-blue-50 shadow-lg"}>
        <div className={"flex flex-col p-8 justify-between h-full"}>
          <div className={"flex flex-col gap-2"}>
            <h1 className={"font-bold text-5xl"}>{"Semiprose"}</h1>
            <p>{"Find your inner voice."}</p>
          </div>
          <div className={"flex justify-end"}>
            <Button label={"To the app"} onClick={() => navigate("/explore")} />
          </div>
        </div>
      </div>
    </div>
  );
}
