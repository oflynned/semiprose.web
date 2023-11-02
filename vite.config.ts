import { defineConfig } from "vite";
import { unstable_vitePlugin as remix } from "@remix-run/dev";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  // idk why it's erroring with types
  // remix + vite is still not production ready, so I'm not surprised
  // @ts-ignore
  plugins: [remix(), tsconfigPaths()],
});
