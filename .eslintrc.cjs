/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript/recommended",
    "@vue/eslint-config-prettier",
  ],
  env: {
    "vue/setup-compiler-macros": true,
  },
  parserOptions: {
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  rules: {
    "vue/no-v-html": "off",
    "vue/no-template-shadow": "off",
    "vue/no-reserved-keys": "off",
    "vue/no-parsing-error": "off",
    "vue/no-dupe-keys": "off",
    "vue/no-duplicate-attributes": "off",
    "vue/no-duplicate-v-bind": "off",
    "vue/no-duplicate-v-on": "off",
    "vue/no-unused-components": "off",
    "vue/no-unused-vars": "off",
    "vue/no-unused-template-keys": "off",
    "vue/no-unused-vars-no-warning": "off",
    "vue/no-unused-vars-in-template": "off",
    "indent-size": [true, 4],
    "no-console": "off",
    "no-debugger": "off",
    "no-unused-vars": "off",
    "no-trailing-spaces": "off",
    "no-unused-expressions": "off",
    "no-undef": "off",
    "no-useless-escape": "off",
    "no-useless-return": "off",
  },
};
