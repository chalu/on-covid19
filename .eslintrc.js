module.exports = {
    env: {
      browser: true,
      es6: true,
      node: true,
      jest: true
    },
    extends: [
      'airbnb-base', 'plugin:prettier/recommended'
    ],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    rules: {
    },
  };