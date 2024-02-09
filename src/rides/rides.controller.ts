import { Controller, Get } from '@nestjs/common';
import { RidesService } from './rides.service';

@Controller('rides')
export class RidesController {
  constructor(private ridesService: RidesService) {
  }
  @Get()
  async getRides() {
    return await this.ridesService.getRides();
  }
}
