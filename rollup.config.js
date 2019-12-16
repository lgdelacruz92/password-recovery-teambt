import babel from "rollup-plugin-babel";
import includePaths from "rollup-plugin-includepaths";

let includePathOptions = {
  include: {},
  paths: ["src/"],
  external: [],
  extensions: [".js", ".json", ".html"]
};

export default [
  {
    input: "src/PasswordRecovery/index.js",
    output: {
      name: "password-recovery-teambt",
      file: "dist/index.js",
      format: "cjs"
    },
    external: [
      "react",
      "@material-ui/core",
      "@material-ui/icons",
      "prop-types",
      "@bit/lgdelacruz92.team-bt.emailtextfield"
    ],
    plugins: [
      babel({
        exclude: "node_modules/.**"
      }),
      includePaths(includePathOptions)
    ]
  }
];
