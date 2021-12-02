import { Test, TestingModule } from '@nestjs/testing';
import { LockerGateway } from './locker.gateway';
import { LockerService } from './locker.service';

describe('LockerGateway', () => {
  let gateway: LockerGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LockerGateway, LockerService],
    }).compile();

    gateway = module.get<LockerGateway>(LockerGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
