import type { StorybookConfig } from "@storybook/react-vite";
import { resolve, dirname } from "path";
const tsconfigPaths = require("vite-tsconfig-paths").default;

const config: StorybookConfig = {
  stories: ["../app/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-themes",
    "storybook-tailwind-dark-mode",
    "storybook-addon-react-router-v6",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["../public"],
  viteFinal: async (config) => {
    config.plugins?.push(
      tsconfigPaths({
        projects: [resolve(dirname(__dirname), "tsconfig.json")],
      })
    );

    return config;
  },
};

export default config;
