import { Controller, Get } from '@nestjs/common';
@Controller()
export class AppController {
  constructor() {}

  @Get()
  root() {
    return 'Ride-Hailing Offer Aggregator API';
  }

}
