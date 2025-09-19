// eslint.config.js
// @ts-check
import js from "@eslint/js";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    ignores: ["node_modules/**", "coverage/**", "dist/**"],
  },

  js.configs.recommended,

  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        // Node
        process: "readonly",
        console: "readonly",
        __dirname: "readonly",
        module: "readonly",
        require: "readonly",
      },
    },
    rules: {
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],
      "no-undef": "error",
    },
  },

  // ajustes específicos para testes
  {
    files: ["tests/**/*.test.js"],
    languageOptions: {
      globals: {
        describe: "readonly",
        it: "readonly",
        expect: "readonly",
        test: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly",
        jest: "readonly",
      },
    },
    rules: {
      "no-console": "off",
    },
  },
];