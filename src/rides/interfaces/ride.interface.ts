export interface Ride {
  provider: string;
  price?: number;
  priceRange?: {
    lowPrice: number;
    highPrice: number;
  };
  duration: string;
  typeOfCar: string;
}

export interface UnifiedRide {
  provider: string;
  price: string;
  duration: string;
  typeOfCar: string;
}
