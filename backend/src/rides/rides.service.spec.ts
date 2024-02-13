import { Test, TestingModule } from '@nestjs/testing';
import { RidesService } from './rides.service';
describe('RidesService', () => {
  let service: RidesService;
  let rides = {
    uber: {
      provider: 'Uber', price: 25, duration: '10 mins', typeOfCar: 'Sedan'
    },
    bolt: { provider: 'Bolt', priceRange: { lowPrice: 18.98, highPrice: 30 }, duration: '12 mins', typeOfCar: 'Sedan' }
  }
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RidesService],
    }).compile();

    service = module.get<RidesService>(RidesService);
  });

  it('should return a collection of UnifiedRides with correct structure', async () => {
    const UnifiedRides = await service.getUnifiedRides();
    expect(UnifiedRides).toBeDefined();
    expect(UnifiedRides.length).toBeGreaterThan(0);
  });

  it('should correctly normalize a fixed price', async () => {
    const fixedPriceRide = rides.uber;
    expect(service.normalizeRide(fixedPriceRide).price).toEqual(fixedPriceRide.price.toFixed(2));
  });

  it('should correctly calculate and normalize a price range', async () => {
    const priceRangeRide = rides.bolt;
    const expectedAveragePrice = ((priceRangeRide.priceRange.highPrice + priceRangeRide.priceRange.lowPrice) / 2).toFixed(2);
    expect(service.normalizeRide(priceRangeRide).price).toEqual(expectedAveragePrice);
  });

  it('should return N/A if no fixed or range price was found', async () => {
    const noPriceRide = { provider: 'Bolt', duration: '12 mins', typeOfCar: 'Sedan' };
    expect(service.normalizeRide(noPriceRide)?.price).toEqual('N/A');
  });
});
