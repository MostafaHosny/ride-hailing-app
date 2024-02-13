import React from 'react'
import { RideOption } from '../types/RideOption'
import RideCard from './RideCard'

const RideOptions: React.FC<{ rideOptions: RideOption[] }> = ({ rideOptions }) => {
  return (
    <>
    <h1 className="text-2xl font-bold text-center"> Ride Options</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {rideOptions.length !== 0 ? (
        rideOptions.map((ride, index) => (
          <RideCard key={index} ride={ride} />
        ))

      ) : (
        <div role="alert" className="alert alert-info">
          <span>No Rides available!</span>
        </div>
      )}
    </div>
    </>
  )
}

export default RideOptions