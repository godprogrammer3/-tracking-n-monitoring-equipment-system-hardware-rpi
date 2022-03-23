import { Test, TestingModule } from '@nestjs/testing';
import { StreamAndRecordVideoGateway } from './stream-and-record-video.gateway';
import { StreamAndRecordVideoService } from './stream-and-record-video.service';

describe('StreamAndRecordVideoGateway', () => {
  let gateway: StreamAndRecordVideoGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StreamAndRecordVideoGateway, StreamAndRecordVideoService],
    }).compile();

    gateway = module.get<StreamAndRecordVideoGateway>(StreamAndRecordVideoGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
