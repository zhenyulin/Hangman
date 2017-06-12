'use strict';

// Make Enzyme functions available in all test files without importing

const { shallow, render, mount } = require('enzyme');

global.shallow = shallow;
global.render = render;
global.mount = mount;

// Fail tests on any warning
console.error = (message) => {
  throw new Error(message);
};
