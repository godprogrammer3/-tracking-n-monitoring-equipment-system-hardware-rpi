import { Module } from '@nestjs/common';
import { LockerService } from './locker.service';
import { LockerGateway } from './locker.gateway';

@Module({
  providers: [LockerGateway, LockerService],
})
export class LockerModule {}
