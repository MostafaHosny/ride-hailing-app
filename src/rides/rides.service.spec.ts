import { Test, TestingModule } from '@nestjs/testing';
import { RidesService } from './rides.service';

describe('RidesService', () => {
  let service: RidesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RidesService],
    }).compile();

    service = module.get<RidesService>(RidesService);
  });

  it('should return a fixed normlized price', () => {
    const normlizedride = { provider: 'Uber', price: '25.00', duration: '15 mins', typeOfCar: 'Sedan' }
    const undefinedRides = service.getRides();
    expect(undefinedRides[0].price).toEqual(normlizedride.price);
  });
});
