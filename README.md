# Hangman [![CircleCI](https://circleci.com/gh/zhenyulin/hangman.svg?style=svg)](https://circleci.com/gh/zhenyulin/hangman)

A simple version of Hangman web app, with game status persistent across server and browser restart

## About

 * Use Redux, Immutable as isomorphic state management on both client and server
 * Use Socket.io to streamline client/server data communication
 * CI/CD `GitHub -> CircleCI -> Docker Image -> Docker Cloud Service`
 * Database such as Mongo can be connected to store state data

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

 * update to latest react-router / react-router-redux
 * integrate Reselect, Redux-segment
 * update test framework to Jest, Cumcumber
 * use RxJS / Redux-saga wherever practical
 * CI configuration update
 * description of boilerplate: babel dependencies, webpack dependencies, others
 
 ---
 ## Boilerpate Dependencies Gloss
 
 ### Babel Dependencies
 
 ### Webpack Dependencies
 
 ### React Related Dependencies
 
 ### Express Server Dependencies
