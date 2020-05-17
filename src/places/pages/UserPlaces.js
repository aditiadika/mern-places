import React from 'react';
import { useParams } from 'react-router-dom';
import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
	{
		id: 'p1',
		title: 'Monas',
		description:
			'Monumen Nasional atau yang populer disingkat dengan Monas atau Tugu Monas adalah monumen peringatan setinggi 132 meter yang didirikan untuk mengenang perlawanan dan perjuangan rakyat Indonesia untuk merebut kemerdekaan dari pemerintahan kolonial Hindia Belanda.',
		imageUrl: 'https://mmc.tirto.id/image/2018/07/28/ilustrasi-monas-2_ratio-16x9.jpg',
		address: 'Gambir, Kecamatan Gambir, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta',
		location: {
			lat: -6.1753924,
			lng: 106.8271528
		},
		creator: '1'
	},
	{
		id: 'p2',
		title: 'Ancol',
		description:
			'Destinasi di tepi laut Ancol memiliki pantai yang populer untuk olahraga air dan kompleks di tepi laut yang dilengkapi rollercoaster serta wahana di Dunia Fantasi dan taman rekreasi air',
		imageUrl: 'https://korporat.ancol.com/fm/app/public/WhatsApp%20Image%202019-06-13%20at%2008.11.14.jpeg',
		address: 'Kelurahan di Pulau Jawa',
		location: {
			lat: -6.1229636,
			lng: 106.8228804
		},
		creator: '2'
	}
];

function UserPlaces() {
	const userId = useParams().userId;
	const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
	return <PlaceList items={loadedPlaces} />;
}

export default UserPlaces;
