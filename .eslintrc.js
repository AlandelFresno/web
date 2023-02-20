/* eslint-disable @typescript-eslint/no-unused-vars */
const DISABLED = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint/eslint-plugin
    'prettier',
    'plugin:@next/next/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
    warnOnUnsupportedTypeScriptVersion: false,
  },
  ignorePatterns: ['**/*.d.ts'],
  rules: {
    quotes: [2, 'single', { avoidEscape: true }],
  },
  env: {
    browser: true,
    node: true,
  },
  settings: {},
};

