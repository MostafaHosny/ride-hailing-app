import React from 'react';
import { RideOption } from '../types/RideOption';

const RideCard: React.FC<{ ride: RideOption }> = ({ ride }) => {
	const { provider, price, duration, typeOfCar } = ride;

	return (
		<div className="card bg-base-100 shadow-xl">
			<div className="card-body">
				<h2 className="card-title text-sky-400">{provider}</h2>
				<p className='text-lg text-green-800'>Estimated Price: ${price}</p>
				<p>Duration: {duration}</p>
				<p>Type of Car: {typeOfCar}</p>
			</div>
		</div>
	);
};

export default RideCard;