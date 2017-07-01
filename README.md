# hangman [![Code Climate](https://codeclimate.com/github/zhenyulin/hangman/badges/gpa.svg)](https://codeclimate.com/github/zhenyulin/hangman) [![Build Status](https://travis-ci.org/zhenyulin/hangman.svg?branch=master)](https://travis-ci.org/zhenyulin/hangman) [![Coverage Status](https://coveralls.io/repos/github/zhenyulin/hangman/badge.svg?branch=master)](https://coveralls.io/github/zhenyulin/hangman?branch=master) [![Dependencies](https://david-dm.org/zhenyulin/hangman.svg)](https://david-dm.org/zhenyulin/hangman) [![devDependencies](https://david-dm.org/zhenyulin/hangman/dev-status.svg)](https://david-dm.org/zhenyulin/hangman?type=dev)

A simple version of Hangman web app, with game status persistent across server and browser restart

## about

 * Use Redux, Immutable as isomorphic state management on both client and server
 * Use Socket.io to streamline client/server data communication
 * CI/CD `GitHub -> CircleCI -> Docker Image Hub -> Private Docker Host`

## serve

 * clone locally
 * run `yarn install`
 * run `yarn serve:fresh`
 * visit `http://localhost:3000/` in your browser

## test

 * unit test `yarn test`
 * test coverage `yarn cover`
 * e2e test `yarn e2e:setup` and `yarn e2e`

## online demo

 * visit [Demo](http://elitir.com:3456/)

## TODO
 * integrate Reselect, RxJS / Redux-saga
 * Update Segment Tracking to show game passing rate
 * update e2e test framework to Cumcumber
 * add JWT auth to the boilerplate and support individual status
 * explanation of each dependencies
 * file watcher update to `chokidar/watchman`
