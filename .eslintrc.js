module.exports = {
  extends: 'airbnb',
  env: {
    browser: true,
    node: true,
    es6: true,
    'jest/globals': true
  },
  parser: 'babel-eslint',
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  plugins: ['jest'],
  rules: {
    "react/react-in-jsx-scope": "off",
    "import/no-extraneous-dependencies": "off",
    "import/no-named-as-default": "off",
    "prefer-default-export": "off",
    "react/jsx-indent-props": [2, 2],
    "react/require-default-props": "off",
  	'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/valid-expect': 'error',
    'jsx-a11y/no-noninteractive-element-interactions': 'off'
  },
  "settings": {
    "import/resolver": {
      "webpack": {
        "config": "./config/webpack.dev.js"
      }
    }
  }
};