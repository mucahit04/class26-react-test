import React from "react";

export default function UserProfile({ user }) {
	return (
		<div className='UserCard'>
			<div className='UserCardTop'>
				<img src={user.picture.large} alt='a user' />
			</div>
			<div className='UserCardBottom'>
				<h3>
					{user.name.first} {user.name.last}
				</h3>
				<p>email</p>
				<h5>{user.email}</h5>
				<p>phone</p>
				<h5>{user.phone}</h5>
				<p>address</p>
				<h5>
					{user.location.street.name} {user.location.street.number}, {user.location.postcode}
				</h5>
				<h5>
					{user.location.city}, {user.location.country}
				</h5>
			</div>
		</div>
	);
}
