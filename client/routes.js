import React from 'react';
import { Route } from 'react-router';

import Hangman from './containers/hangman';
import Management from './containers/management';

const routes = (
	<Route>
		<Route path="/" component={Hangman} />
		<Route path="/management" component={Management} />
	</Route>
);

export default routes;