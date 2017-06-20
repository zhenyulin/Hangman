# Hangman [![Code Climate](https://codeclimate.com/github/zhenyulin/hangman/badges/gpa.svg)](https://codeclimate.com/github/zhenyulin/hangman) [![CircleCI](https://circleci.com/gh/zhenyulin/hangman.svg?style=shield)](https://circleci.com/gh/zhenyulin/hangman) [![Build Status](https://travis-ci.org/zhenyulin/rainbow.svg?branch=master)](https://travis-ci.org/zhenyulin/rainbow) [![Coverage Status](https://coveralls.io/repos/github/zhenyulin/rainbow/badge.svg?branch=master)](https://coveralls.io/github/zhenyulin/rainbow?branch=master) [![CLA assistant check](https://cla-assistant.io/pull/badge/signed)](https://cla-assistant.io/zhenyulin/hangman?pullRequest=1)

A simple version of Hangman web app, with game status persistent across server and browser restart

## About

 * Use Redux, Immutable as isomorphic state management on both client and server
 * Use Socket.io to streamline client/server data communication
 * CI/CD `GitHub -> CircleCI -> Docker Image -> Private Docker Host`

## Serve

 * clone locally
 * run `npm install` / `yarn`
 * run `npm run serve:fresh` / `yarn serve:fresh`
 * visit `http://localhost:3000/` in your browser

## Test

 * unit test `npm run test` / `yarn test`
 * test coverage `npm run coverage` / `yarn coverage`
 * e2e test `npm run e2e:setup` and `npm run e2e`

## Online Demo

 * visit [Demo](http://elitir.com:3456/)

## TODO
 * integrate Reselect, RxJS / Redux-saga
 * Update Segment Tracking to show game passing rate
 * update e2e test framework to Cumcumber
 * add auth to the boilerplate and support individual status
 * update to latest react-router / react-router-redux
 * CI configuration update to travis
 * explanation of each dependencies
 * file watcher update to `chokidar/watchman`
 * eslint resolver
 * babel resolver and production

---


## Boilerpate Dependencies Dictionary


### React Related Dependencies
 * react-addons-perf
 * react-addons-test-utils
 * react-hot-loader
 * react-transform-hmr
 * redux-devtools-extension
 * immutable
 * react
 * react-dom
 * react-redux
 * react-router
 * react-redux-router
 * redux
 * socket.io-client
 * styled-components

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
 * webpack-dev-middleware
 * webpack-hot-middleware

### Linting
 * babel-eslint
 * eslint
 * eslint-plugin-react

### Unit Test
 * jest
 * enzyme

### E2E Test
 * nightwatch
 * selenium-standalone

### Babel Dependencies
 * babel-cli
 * babel-core
 * babel-plugin-react-transform
 * babel-plugin-syntax-decorators
 * babel-plugin-transform-class-properties
 * babel-plugin-transform-html-import-to-string
 * babel-polyfill
 * babel-preset-latest
 * babel-preset-react
 * babel-register


### Webpack Dependencies
 * autoprefixer
 * babel-loader
 * extract-text-webpack-plugin
 * file-loader
 * ignore-styles
 * image-webpack-loader
 * webpack
