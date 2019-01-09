import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";

const extensions = [".ts"];

export default [
  {
    input: "src/index.ts",
    output: {
      format: "umd",
      name: "RV",
      file: "lib/index.js",
      globals: { ramda: "R" }
    },
    external: ["ramda"],
    plugins: [
      resolve({ extensions }),
      babel({
        extensions,
        exclude: "node_modules/**"
      })
    ]
  }
];
