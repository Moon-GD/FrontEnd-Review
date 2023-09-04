module.exports = {
    parser: "@typescript-eslint/parser",
    extends: [
      "plugin:react/recommended",
      "plugin:@typescript-eslint/recommended",
      "prettier/@typescript-eslint",
      "plugin:prettier/recommended",
    ],
    plugins: ["@typescript-eslint", "react"],
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      ecmaFeatures: {
        jsx: true,
      },
    },
    rules: {
      // 여기에 사용자 정의 규칙을 추가하세요 (옵션)
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  };
  