import React from 'react';
import { Route } from 'react-router';

import Hangman from './containers/hangman';
import Management from './containers/management';
import HelloWorld from './containers/hello-world';
import Test from './containers/test';

const routes = (
  <Route>
    <Route path="/" component={HelloWorld} />
    <Route path="/test" component={Test} />
    <Route path="/hangman" component={Hangman} />
    <Route path="/management" component={Management} />
  </Route>
);

export default routes;
