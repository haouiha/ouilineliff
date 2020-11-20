import React from 'react';
import { RecoilRoot } from 'recoil';

import AppRouter from './router';

const App = () => {
	return (
		<RecoilRoot>
			<AppRouter />
		</RecoilRoot>
	);
};

export default App;
