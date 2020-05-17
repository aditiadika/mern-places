import React from 'react';
import Card from '../../shared/components/UIElements/Card';
import './PlaceItem.css';

function PlaceItem({ id, title, image, description, address, creatorId, coordinates }) {
	return (
		<li className="place-item">
			<Card className="place-item__content">
				<div className="place-item___image">
					<img src={image} alt={title} />
				</div>
				<div className="place-item__info">
					<h2>{title}</h2>
					<h3>{address}</h3>
					<p>{description}</p>
				</div>
				<div className="place-item__actions">
					<button>View on the map</button>
					<button>Edit</button>
					<button>Delete</button>
				</div>
			</Card>
		</li>
	);
}

export default PlaceItem;
