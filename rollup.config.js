import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";

export default [
  {
    input: "src/index.js",
    output: {
      format: "umd",
      name: "ReactValidations",
      file: "lib/index.js"
    },
    external: ["ramda"],
    plugins: [
      resolve(),
      babel({
        exclude: "node_modules/**"
      })
    ]
  },
  {
    input: "src/validators/index.js",
    output: {
      format: "umd",
      name: "Validator",
      file: "lib/validators.js"
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

//
// export default {
//   input: 'src/main.js',
//   output: {
//     file: 'bundle.js',
//     format: 'cjs'
//   },
//   plugins: [
//     resolve(),
//     babel({
//       exclude: 'node_modules/**' // only transpile our source code
//     })
//   ]
// };
