const globals = require('globals')
const pluginJs = require('@eslint/js')
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended')
const avaPlugin = require('eslint-plugin-ava')

module.exports = [
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  eslintPluginPrettierRecommended,
  {
    plugins: {
      avaPlugin,
    },
    rules: {
      'prettier/prettier': ['error', { singleQuote: true }],
    },
  },
]
