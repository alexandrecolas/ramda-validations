import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";

export default [
  {
    input: "src/index.js",
    output: {
      format: "umd",
      name: "RV",
      file: "lib/index.js",
      globals: { ramda: "R" }
    },
    external: ["ramda"],
    plugins: [
      resolve(),
      babel({
        exclude: "node_modules/**"
      })
    ]
  }
];
