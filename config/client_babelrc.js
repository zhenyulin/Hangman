/* eslint-disable strict */

'use strict';

module.exports = {
  presets: [
    [
      /**
       * https://github.com/babel/babel-preset-env#usage
       */
      'env',
      {
        targets: {
          /**
           * Customize as needed
           *
           * Current list taken from:
           * https://github.com/facebookincubator/create-react-app/blob/f6d85440335ba61c828cfb30259b2ecb91c3da2d/packages/react-scripts/config/webpack.config.prod.js#L230-L235
           */
          browsers: [
            '>1%',
            'last 4 versions',
            'Firefox ESR',
            'not ie < 9', // React doesn't support IE8 anyway
          ],

          /**
           * This option will include all ES5 polyfills required by UglifyJs
           * https://github.com/babel/babel-preset-env#targetsuglify
           *
           * Can disable in development if wanted
           *
           */
          uglify: true,
        },
        // modules: false,
        useBuiltIns: true,
      },
    ],
    'react',
  ],
  plugins: [
    'add-module-exports',
    'transform-object-rest-spread',
    'transform-class-properties',
    'transform-html-import-to-string',
  ],
};
