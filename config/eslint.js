module.exports = {
  extends: 'airbnb',
  env: {
    browser: true,
    node: true,
    es6: true,
    'jest/globals': true,
  },
  parser: 'babel-eslint',
  plugins: ['jest'],
  rules: {
  	'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/valid-expect': 'error',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
  },
};
