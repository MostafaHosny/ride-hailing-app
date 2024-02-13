import React from "react";
import RideCard from '../components/RideCard';
import { RideOption } from "../types/RideOption";


const endpointUrl = 'http://localhost:3001/rides'; // API host should be an environment variable

async function fetchRides() {
  try {
    const res = await fetch(endpointUrl, { cache: "no-store" });
    const ridesOptions: RideOption[] = await res.json();
    return ridesOptions;
  } catch (error) {
    console.error("Failed to fetch rides:", error);
    return [];
  }
}

export default async function Home() {
  const ridesOptions = await fetchRides();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {ridesOptions.length !== 0 ? (
          ridesOptions.map((ride, index) => (
            <RideCard key={index} ride={ride} />
          ))

        ) : (
          <div role="alert" className="alert alert-info">
            <span>No Rides available!</span>
          </div>
        )}
      </div>
    </main>
  );
}
