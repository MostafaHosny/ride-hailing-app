import { Injectable, Logger } from '@nestjs/common';
import { Ride, UnifiedRide } from './interfaces/ride.interface';
import { rides } from './data/mocked-rides.json';
@Injectable()
export class RidesService {
  private readonly logger = new Logger(RidesService.name);

  async getUnifiedRides(): Promise<UnifiedRide[]> {
    try {
      return await rides.map((ride) => (this.normalizeRide(ride)));
    } catch (error) {
      this.logger.error('Failed to get unified rides', error.stack);
      throw new Error('Error retrieving rides data');
    }
  }

  normalizeRide(ride: Ride): UnifiedRide {
    return {
      provider: ride.provider,
      price: this.normalizePrice(ride),
      duration: ride.duration,
      typeOfCar: ride.typeOfCar,
    };
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