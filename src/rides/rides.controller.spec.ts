import { Test, TestingModule } from '@nestjs/testing';
import { RidesController } from './rides.controller';
import { RidesService } from './rides.service';

describe('RidesController', () => {
  let controller: RidesController;
  let ridesService: RidesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RidesController],
      providers: [RidesService],
    }).compile();

    controller = module.get<RidesController>(RidesController);
    ridesService = module.get<RidesService>(RidesService);
  });

  it('should return a list of rides', async () => {
    const rides = await controller.getRides();
    expect(rides).toBeDefined();
  });
});
