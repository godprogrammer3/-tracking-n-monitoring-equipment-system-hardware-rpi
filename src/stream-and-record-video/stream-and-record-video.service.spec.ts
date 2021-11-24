import { Test, TestingModule } from '@nestjs/testing';
import { StreamAndRecordVideoService } from './stream-and-record-video.service';

describe('StreamAndRecordVideoService', () => {
  let service: StreamAndRecordVideoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StreamAndRecordVideoService],
    }).compile();

    service = module.get<StreamAndRecordVideoService>(StreamAndRecordVideoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
