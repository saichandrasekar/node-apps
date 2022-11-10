import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MonitorController } from './monitor/monitor.controller';
import { GeneratorController } from './generator/generator.controller';

@Module({
  imports: [],
  controllers: [AppController, MonitorController, GeneratorController],
  providers: [AppService],
})
export class AppModule {}
