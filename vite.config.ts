import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import babel from "@rollup/plugin-babel";

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    babel({
      babelHelpers: "bundled",
      presets: [["@babel/preset-react", { runtime: "automatic", importSource: "react" }]],
    }),
  ],
  esbuild: {
    jsxFactory: "React.createElement",
  },
});
