import vue from "eslint-plugin-vue";
import js from "@eslint/js";
import vuePrettier from "@vue/eslint-config-prettier";

export default [
  js.configs.recommended,
  ...vue.configs["flat/recommended"],
  vuePrettier,
  {
    files: ["**/*.vue", "**/*.js"],
    languageOptions: {
      globals: {
        require: "readonly",
        process: "readonly",
        console: "readonly",
      },
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      "vue/multi-word-component-names": "off",
      "vue/require-default-prop": "off",
    },
    ignores: ["**/*.test.js", "**/node_modules/**", "dist/**", ".git/**"],
  },
];
