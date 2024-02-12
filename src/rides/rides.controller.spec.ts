import { Test, TestingModule } from '@nestjs/testing';
import { RidesController } from './rides.controller';
import { RidesService } from './rides.service';
import { HttpException, HttpStatus } from '@nestjs/common';

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

  it('should call getUnifiedRides from ridesService', async () => {
    const ridesServiceSpy = jest.spyOn(ridesService, 'getUnifiedRides');
    await controller.getRides();
    expect(ridesServiceSpy).toHaveBeenCalled();
  });

  it('should return a server error code', async () => {
    jest.spyOn(ridesService, 'getUnifiedRides').mockRejectedValue(new Error('Server error'));
    expect(controller.getRides()).rejects.toThrow(new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR));
  });
});
