import { Injectable, Logger } from '@nestjs/common';
import { Ride, UnifiedRide } from './interfaces/ride.interface';
import { rides } from './data/mocked-rides.json';
@Injectable()
export class RidesService {
  getRides(): UnifiedRide[] {
    return rides.map((ride) => ({
      provider: ride.provider,
      price: this.normalizePrice(ride),
      duration: ride.duration,
      typeOfCar: ride.typeOfCar,
    }));
  }

  private normalizePrice(ride: Ride): string {
    if (ride.price) {
      return ride.price.toFixed(2);
    } else if (ride.priceRange) {
      const averagePrice =
        (ride.priceRange.lowPrice + ride.priceRange.highPrice) / 2;
      return averagePrice.toFixed(2);
    } else {
      return 'N/A';
    }
  }
}
