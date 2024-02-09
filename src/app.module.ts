import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RidesController } from './rides/rides.controller';
import { RidesService } from './rides/rides.service';

@Module({
  imports: [],
  controllers: [AppController, RidesController],
  providers: [AppService, RidesService],
})
export class AppModule {}
