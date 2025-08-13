import * as packageJson from "./package.json"
import commonjs from "@rollup/plugin-commonjs"
import { nodeResolve } from "@rollup/plugin-node-resolve"
import typescript from "@rollup/plugin-typescript"
import terser from "@rollup/plugin-terser"
import json from "@rollup/plugin-json"
import { defineConfig } from "rollup"

export default defineConfig({
  input: "src/index.ts",
  external: ["@anstec/earth", "react"],
  treeshake: true,
  output: [
    {
      file: packageJson.main,
      exports: "named",
      format: "cjs",
    },
    {
      file: packageJson.module,
      format: "es",
    },
  ],
  plugins: [
    commonjs(),
    typescript(),
    nodeResolve(),
    terser({ keep_classnames: true, keep_fnames: true }),
    json(),
  ],
  onwarn(warning, next) {
    if (warning.code !== "UNUSED_EXTERNAL_IMPORT") {
      next(warning)
    }
  },
})
