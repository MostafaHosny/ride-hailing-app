import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { RidesModule } from './rides/rides.module';

@Module({
  imports: [RidesModule],
  controllers: [AppController]
})
export class AppModule {}
