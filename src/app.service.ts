import { Injectable } from '@nestjs/common';
import { getResponse, ResponseDto } from './utils/response';

@Injectable()
export class AppService {
  getHello(): ResponseDto {
    return getResponse('00', {
      uid: process.env.LOCKER_UID,
    });
  }
}
