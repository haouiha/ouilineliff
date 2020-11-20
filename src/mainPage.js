import React, { useState, useEffect } from 'react';
import liff from '@line/liff';

const liffId = process.env.REACT_APP_LINE_LIFF_ID;

const App = () => {
	const [userInfo, setUserInfo] = useState({ name: '', userLineID: '', pictureUrl: '' });

	const liffBootstrap = async () => {
		await liff.init({ liffId }).catch((err) => {
			throw err;
		});
		if (liff.isLoggedIn()) {
			let getProfile = await liff.getProfile();
			setUserInfo({ name: getProfile.displayName, userLineID: getProfile.userId, pictureUrl: getProfile.pictureUrl });
		} else {
			liff.login();
		}
	};

	useEffect(() => {
		liffBootstrap();
	}, []);

	const handleLogout = () => {
		liff.logout();
	};

	if (!userInfo.name) return null;
	return (
		<div className="App">
			<header className="App-header">
				<div className="support">
					<p>ชื่อ {userInfo.name}</p>
					<p>Line ID {userInfo.userLineID}</p>
					<img alt="pic" src={userInfo.pictureUrl} style={{ width: 300 }} />
					{/* <button onCLick={handleLogout}>logout</button> */}
				</div>
			</header>
		</div>
	);
};

export default App;
