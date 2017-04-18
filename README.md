# Hangman [![CircleCI](https://circleci.com/gh/zhenyulin/hangman.svg?style=svg)](https://circleci.com/gh/zhenyulin/hangman)

A simple version of Hangman web app, with game status persistent across server and browser restart


### About

 * Use Redux, Immutable to manage game state on server/client
 * Use Socket.io to streamline client/server communication
 * Use Node, Express as the server framework
 * Database such as Mongo can be connected to store state data
 * CI/CD `GitHub -> CircleCI -> Docker Image -> Docker Cloud Service`

### Serve

 * clone locally
 * run `npm install` / `yarn`
 * run `npm run serve:fresh` / `yarn serve:fresh`
 * visit `http://localhost:3000/` in your browser

### Test

 * unit test `npm run test` / `yarn test`
 * test coverage `npm run coverage` / `yarn coverage`
 * e2e test `npm run e2e:setup` and `npm run e2e`

### Online Demo

 * visit [Demo](http://elitir.com:3456/)

### TODO

 * integrate react-router into the boilerplate
 * integrate Reselect, Redux-segment
 * update test framework to Jest, Cumcumber
 * data stream control with RxJS
 * description of boilerplate: babel dependencies, webpack dependencies, others
 * CI configuration update
 
 ---
 ### Boilerpate Dependencies Gloss
