import React from 'react';

import UserItem from './UserItem';
import './UsersList.css';

function UsersList({ items }) {
	if (items.length === 0) {
		return (
			<div>
				<p>User not found</p>
			</div>
		);
	}

	return (
		<ul className="users-list">
			{items.map((user) => {
				return (
					<UserItem key={user.id} id={user.id} image={user.image} name={user.name} placeCount={user.places} />
				);
			})}
		</ul>
	);
}

export default UsersList;
