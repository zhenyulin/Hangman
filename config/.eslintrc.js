'use strict';

/**
 * /config should be in es6.
 * Although babel-node is called on the build tools, certain files are called from the App
 * which will not accept unsupported JS features.
 */

module.exports = {
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'script',
    ecmaFeatures: {
      jsx: false,
      experimentalObjectRestSpread: false,
    },
  },
  env: {
    browser: false,
  },
  rules: {
    strict: ['error','safe'],

    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'never',
        exports: 'never',
        /**
         * Not supported with node 4-6. Wait for node 8 LTS
         */
        functions: 'never',
      },
    ],
  },
  globals: {},
};
