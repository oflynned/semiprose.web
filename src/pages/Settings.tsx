export const Settings = () => {
  return (
    <div className={"flex flex-col gap-4"}>
      <h3 className={"font-bold text-4xl"}>{"Settings"}</h3>
      <div>
        <h4 className={"font-medium text-xl"}>{"Privacy"}</h4>
        <p>{"Who can see your stories"}</p>
      </div>
      <div>
        <h4 className={"font-medium text-xl"}>{"Danger Zone"}</h4>
        <p>{"Delete your account"}</p>
      </div>
    </div>
  );
};
