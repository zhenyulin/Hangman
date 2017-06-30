# Hangman [![Code Climate](https://codeclimate.com/github/zhenyulin/hangman/badges/gpa.svg)](https://codeclimate.com/github/zhenyulin/hangman) [![CircleCI](https://circleci.com/gh/zhenyulin/hangman.svg?style=shield)](https://circleci.com/gh/zhenyulin/hangman) [![Build Status](https://travis-ci.org/zhenyulin/hangman.svg?branch=master)](https://travis-ci.org/zhenyulin/hangman) [![Coverage Status](https://coveralls.io/repos/github/zhenyulin/hangman/badge.svg?branch=master)](https://coveralls.io/github/zhenyulin/hangman?branch=master) [![CLA assistant check](https://cla-assistant.io/pull/badge/signed)](https://cla-assistant.io/zhenyulin/hangman?pullRequest=1)

A simple version of Hangman web app, with game status persistent across server and browser restart

## About

 * Use Redux, Immutable as isomorphic state management on both client and server
 * Use Socket.io to streamline client/server data communication
 * CI/CD `GitHub -> CircleCI -> Docker Image Hub -> Private Docker Host`

## Serve

 * clone locally
 * run `yarn install`
 * run `yarn serve:fresh`
 * visit `http://localhost:3000/` in your browser

## Test

 * unit test `yarn test`
 * test coverage `yarn cover`
 * e2e test `yarn e2e:setup` and `yarn e2e`

## Online Demo

 * visit [Demo](http://elitir.com:3456/)

## TODO
 * integrate Reselect, RxJS / Redux-saga
 * Update Segment Tracking to show game passing rate
 * update e2e test framework to Cumcumber
 * add JWT auth to the boilerplate and support individual status
 * travis CI integration with dockerhub
 * explanation of each dependencies
 * file watcher update to `chokidar/watchman`

---


## Boilerpate Dependencies Dictionary


### React Related Dependencies
 * immutable
 * prop-types
 * react
 * react-addons-perf `react performance benchmark tool`
 * react-addons-test-utils `peer dependency of enzyme`
 * react-dom
 * react-redux
 * react-redux-router
 * react-router
 * redux
 * redux-devtools-extension
 * socket.io-client
 * styled-components
 * styled-components-theme

### Express Server Dependencies
 * body-parser
 * compression
 * cors
 * express
 * express-validator
 * favicon
 * helmet
 * jsonwebtoken
 * mongoose
 * morgan
 * nodemon
 * passport
 * passport-jwt
 * passport-local
 * socket.io
 * webpack-dev-middleware-webpack-2 `express middleware to run webpack 2 bundle task`
 * webpack-hot-middleware `express middleware to monitor bundle task and communicate with client in the browser`

### Linting
 * babel-eslint
 * eslint
 * eslint-config-airbnb
 * eslint-import-resolver-node
 * eslint-import-resolver-webpack
 * eslint-plugin-import
 * eslint-plugin-jest
 * eslint-plugin-jsx-a11y
 * eslint-plugin-react
 * eslint-plugin-react
 * eslint-watch
 * stylelint
 * stylelint-config-standard
 * stylelint-processor-styled-components

### Unit Test
 * enzyme
 * enzyme-to-json
 * jest
 * npm-watch

### E2E Test
 * cucumber
 * nightwatch
 * selenium-standalone
 * selenium-webdriver

### Babel Dependencies
 * babel-core
 * babel-plugin-transform-class-properties (enable `static` syntax in class)
 * babel-polyfill
 * babel-preset-env
 * babel-preset-flow
 * babel-preset-react
 * babel-register


### Webpack Dependencies
 * babel-loader
 * file-loader
 * html-loader
 * webpack
 * webpack-dev-middleware-webpack-2
 * webpack-hot-middleware
 * webpack-node-externals
