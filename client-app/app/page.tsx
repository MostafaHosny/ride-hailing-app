import React from "react";
import { RideOption } from "../types/RideOption";
import RideOptions from "@/components/RideOptions";

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
    <main className="flex min-h-screen flex-col items-center p-24">
      <RideOptions rideOptions={ridesOptions} />
    </main>
  );
}
