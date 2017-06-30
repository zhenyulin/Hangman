import React, { Component } from 'react';
import { Route, Switch } from 'react-router';

import Hangman from './containers/hangman';
import Management from './containers/management';

export default class Router extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Hangman} />
        <Route path="/management" component={Management} />
      </Switch>
    );
  }
}
