import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ResponseDto } from './utils/response';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): ResponseDto {
    return this.appService.getHello();
  }
}
