import React from 'react';
import { Link } from 'react-router-dom';
import './PlaceList.css';
import Card from '../../shared/components/UIElements/Card';
import PlaceItem from './PlaceItem';

function PlaceList({ items }) {
	if (items.length === 0) {
		return (
			<div className="place-list center">
				<Card>
					<h2>Data Not found, Maybe create one?</h2>
					<Link to="/">
						<p>Create</p>
					</Link>
				</Card>
			</div>
		);
	}

	return (
		<ul className="place-list">
			{items.map((item) => (
				<PlaceItem
					key={item.id}
					id={item.id}
					image={item.imageUrl}
					title={item.title}
					description={item.description}
					address={item.address}
					creatorId={item.creatorId}
					coordinates={item.location}
				/>
			))}
		</ul>
	);
}

export default PlaceList;
