import type { StorybookConfig } from "@storybook/react-vite";
import { resolve, dirname } from "path";
import tsconfigPaths from "vite-tsconfig-paths";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-themes",
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
