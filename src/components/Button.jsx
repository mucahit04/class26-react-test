import React from "react";

export default function Button({ getUsers }) {
	return (
		<div>
			<button className='button' onClick={() => getUsers()}>
				Get Users
			</button>
		</div>
	);
}
