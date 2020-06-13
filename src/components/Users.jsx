import React, { useState } from "react";
import Button from "./Button";

export default function Users(props) {
	const url = "https://randomuser.me/api/?results=5";
	const [userList, setUserList] = useState([]);
	const [isError, setError] = useState(false);
	const [isLoading, setLoading] = useState(false);

	async function getUsers() {
		setLoading(true);
		try {
			const res = await fetch(url);
			const data = await res.json();
			setUserList(data.results);
		} catch (error) {
			setError(true);
		} finally {
			setLoading(false);
		}
	}
	return (
		<div>
			<Button getUsers={getUsers} />
			{isLoading && (
				<img
					src='https://lh3.googleusercontent.com/proxy/x68-M0IRqRK-PHO038AiHBp7s4TtcUo0VEp4SBbk7VsTrTb9YbnyiVXN1Fhtloo1F4xzwFGXsfGxLe-42OYGYXzJExmgJr1Vk0bQZOG3WPOiRZ3n_slOsAVvzIoQC7g'
					alt='loading spinner'
				></img>
			)}
			{isError && <p>Something bad happened! Please refresh the page.</p>}
			{!isError && !isLoading && userList && (
				<ul className='friendsList'>
					{userList.map((user, index) => (
						<li key={index} onClick={() => props.clickHandler(user)}>
							{user.name.first} {user.name.last}
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
