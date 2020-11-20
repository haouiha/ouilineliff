import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import RegisterPage from './RegisterPage';
import mainPage from './mainPage';

const AppRouter = () => {
	return (
		<Router>
			<Switch>
				<Route exec path="/register/:lineId" component={RegisterPage} />

				<Route exec path="/" component={mainPage} />
			</Switch>
		</Router>
	);
};

export default AppRouter;

function Home() {
	return <h2>Home</h2>;
}
