import React, { useState } from "react";
import "./App.css";
import Users from "./components/Users";
import UserProfile from "./components/UserProfile";

function App() {
	const [userData, setUserData] = useState();

	const clickHandler = user => {
		setUserData(user);
	};
	return (
		<div>
			<Users clickHandler={clickHandler} />
			{userData && <UserProfile user={userData} />}
		</div>
	);
}

export default App;
