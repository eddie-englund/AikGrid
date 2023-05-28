/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  env: { node: true, browser: true },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-prettier/skip-formatting',
  ],
  plugins: ['prettier', '@typescript-eslint'],
  parserOptions: {
    ecmaVersion: 'latest',
    'vue/no-setup-props-destructure': 'off',
    parser: '@typescript-eslint/parser',
  },
  rules: {
    'prettier/prettier': 'error',
    'vue/no-setup-props-destructure': 'off',
    'no-unused-vars': 'off',
  },
};
