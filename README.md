# Hangman [![CircleCI](https://circleci.com/gh/zhenyulin/Hangman.svg?style=svg)](https://circleci.com/gh/zhenyulin/Hangman)

A simple version of Hangman web app, with game status persistent across server and browser restart

## About

 * Use Redux, Immutable to manage game state on server/client
 * Use Socket.io to streamline client/server communication
 * Use Node, Express as the server framework
 * Database such as Mongo can be connected to store state data
 * CI/CD `GitHub -> CircleCI -> Docker Image -> Docker Cloud Service`

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

 * update test framework to Jest, Cumcumber
 * data stream control with RxJS
 * front end code tidy up
 * update to ducks/controller file pattern
 * description of boilerplate: babel dependencies, webpack dependencies, others
