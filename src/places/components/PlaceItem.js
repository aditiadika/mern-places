import React, { useState } from 'react';
import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import Modal from '../../shared/components/UIElements/Modal';
import Map from '../../shared/components/UIElements/Map';
import './PlaceItem.css';

function PlaceItem({ id, title, image, description, address, creatorId, coordinates }) {
	const [ showMap, setShowMap ] = useState(false);

	const openMapHandler = () => setShowMap(true);
	const closeMapHandler = () => setShowMap(false);

	return (
		<React.Fragment>
			<Modal
				show={showMap}
				onCancel={closeMapHandler}
				header={address}
				contentClass="place-item__modal-content"
				footerClass="place-item__modal-actions"
				footer={<Button onClick={closeMapHandler}>Close</Button>}
			>
				<div className="map-container">
					<Map center={coordinates} zoom={16} />
				</div>
			</Modal>
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
						<Button inverse onClick={openMapHandler}>
							View on the map
						</Button>
						<Button to={`/places/${id}`}>Edit</Button>
						<Button danger>Delete</Button>
					</div>
				</Card>
			</li>
		</React.Fragment>
	);
}

export default PlaceItem;
