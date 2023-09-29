// eslint-disable-next-line functional/immutable-data,functional/no-expression-statements,unicorn/prefer-module
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/strict-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "plugin:n/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:promise/recommended",
    "plugin:etc/recommended",
    "plugin:array-func/recommended",
    "plugin:@eslint-community/eslint-comments/recommended",
    "plugin:@shopify/core",
    "plugin:@shopify/esnext",
    "plugin:@shopify/node",
    "plugin:@shopify/typescript",
    "plugin:@shopify/typescript-type-checking",
    "plugin:unicorn/recommended",
    "plugin:sonar/recommended",
    "plugin:sonarjs/recommended",
    "plugin:regexp/recommended",
    "plugin:security/recommended",
    "typed-fp",
    "plugin:perfectionist/recommended-natural",
    "prettier",
    "plugin:@shopify/prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
  plugins: ["functional", "total-functions"],
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts"],
    },
    "import/resolver": {
      node: true,
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
};
