'use strict';

const babelrc = {
  presets: [
    [
      'env',
      {
        targets: {
          node: '6.10',
        },
        useBuiltIns: true,
      },
    ],
  ],
  plugins: [
    'transform-object-rest-spread',
    'transform-class-properties',
    'transform-html-import-to-string',
  ],
};

/**
 * jest/test mode probably needs the react preset
 */
if (process.env.NODE_ENV === 'test') {
  babel.presets.push('react');
}

module.exports = babelrc;
