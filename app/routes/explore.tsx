import type { MetaFunction } from "@remix-run/node";
import { Card, NavigationBar } from "~/design-system";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Explore() {
  return (
    <div className={"relative flex flex-row"}>
      <NavigationBar
        showCompose={true}
        titles={["Explore", "Stories", "Notifications", "Guilds"]}
      />
      <div className={"flex flex-col m-8 gap-4 max-w-screen-md"}>
        <h1 className={"text-3xl font-medium"}>{"The Enchanted Doorway"}</h1>
        <h5>{"4 minute read — Published 29 October 2023"}</h5>
        <Card>
          <div className={"flex flex-col p-8 gap-4 bg-blue-50"}>
            <div className={"flex flex-col"}>
              <div className={"flex flex-row justify-between"}>
                <h3 className={"font-medium"}>{"Week 43"}</h3>
                <p>{"1.2K readers"}</p>
              </div>
              <div>
                <p>{"@wetdaddy69"}</p>
              </div>
            </div>
            <div className={"flex flex-row gap-2"}>
              {["fantasy", "awe", "solitude", "escapism"].map((tag) => (
                <p>{`#${tag}`}</p>
              ))}
            </div>
            <div>
              {[
                "Amidst the whispers of a forgotten forest, a curious wanderer stumbles upon a hidden door that promises to reveal the greatest secret of their life. Little do they know, this door leads to a realm where time flows differently, and they must navigate a series of surreal challenges to uncover the truth before the forest claims them forever.",
                "In the heart of the forgotten forest, where ancient trees stood tall and their leaves whispered secrets of a bygone era, a curious wanderer named Lila stumbled upon a door unlike any other. Covered in ivy and concealed by time, this door beckoned with an irresistible allure. As Lila pushed it open, a rush of cool air, scented with the essence of pine and mystery, greeted her. Beyond the threshold lay a realm where time seemed to have a will of its own, flowing in erratic currents. The forest she thought she knew had transformed into a surreal landscape, where gravity could shift, and reality wavered.",
                "Lila's quest to uncover the greatest secret of her life had taken an unexpected turn. She now faced a series of enigmatic challenges, each more confounding than the last. With each step deeper into this bewildering world, she realized that the door held not just her secret but the very essence of the forest itself. To escape the clutches of time's capricious dance and the encroaching forest, she would need all her wit, courage, and the guidance of the forest's ancient spirits. The countdown had begun, and Lila knew she had to uncover the truth before the forest claimed her forever.",
              ].map((text) => (
                <p className={"leading-loose"}>{text}</p>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
