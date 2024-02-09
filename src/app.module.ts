import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProvidersController } from './providers/providers.controller';
import { ProvidersService } from './providers/providers.service';

@Module({
  imports: [],
  controllers: [AppController, ProvidersController],
  providers: [AppService, ProvidersService],
})
export class AppModule {}
