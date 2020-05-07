import React from 'react';
import UserList from '../components/UsersList';

function User() {
	const USER = [
		{
			id: '1',
			name: 'Adit',
			image: 'https://image.shutterstock.com/image-photo/antartic-panorama-foyn-harbor-west-260nw-126226577.jpg',
			places: 3
		}
	];

	return (
		<div>
			<UserList items={USER} />
		</div>
	);
}

export default User;
