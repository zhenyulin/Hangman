import React, { Component } from 'react';
import { Route } from 'react-router';

import Hangman from './containers/hangman';
import Management from './containers/management';

export default class Router extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Hangman} />
        <Route path="/management" component={Management} />
      </div>
    );
  }
}
