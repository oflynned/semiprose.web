import { Layout } from "~/design-system";

export const Notifications = () => {
  return (
    <Layout>
      <div className={"flex flex-col gap-4"}>
        <h3 className={"font-bold text-4xl"}>{"Notifications"}</h3>
        <p>{"Hooray! You're all caught up."}</p>
      </div>
    </Layout>
  );
};
