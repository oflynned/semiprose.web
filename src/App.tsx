import { Button } from "./design-system";
import { useTheme } from "~/hooks";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={"flex flex-col m-8 gap-4"}>
      <div className={"dark:bg-gray-700"}>
        <p className={"dark:text-white"}>{theme}</p>
      </div>
      <div>
        <Button
          label={"Toggle theme"}
          onClick={() => toggleTheme(theme === "light" ? "dark" : "light")}
        />
      </div>
    </div>
  );
};

export default App;
