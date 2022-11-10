import { Controller, Get } from '@nestjs/common';

@Controller('monitor')
export class MonitorController {
  constructor() {}

  @Get('isalive')
  getIsAlive(): string {
    return 'Text Generator is up and running...!';
  }
}
