import { Controller, Get, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { RidesService } from './rides.service';

@Controller('rides')
export class RidesController {
  private readonly logger = new Logger(RidesController.name);
  constructor(private ridesService: RidesService) {
  }
  @Get()
  async getRides() {
    try {
      return await this.ridesService.getUnifiedRides();
    }catch (error) {
    this.logger.error('Failed to retrieve rides', error.stack);
    throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
    
  }
}
