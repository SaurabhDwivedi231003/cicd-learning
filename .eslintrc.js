const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "eslint:recommended",
    "prettier",
    require.resolve("@vercel/style-guide/eslint/next"),
    "eslint-config-turbo",
  ],
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    node: true,
    browser: true,
  },
  plugins: ["only-warn"],
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: [
    "node_modules/",
    ".next/",
    "dist/",
  ],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project,
      },
    },
    {
      files: ["*.js", "*.cjs", "*.mjs"],
      parser: "espree", // fallback to plain JS parser
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
      },
    },
  ],
  rules: {
    "next/no-html-link-for-pages": "off", // disable Next.js pages rule
  },
};
