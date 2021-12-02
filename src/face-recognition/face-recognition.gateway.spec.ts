import { Test, TestingModule } from '@nestjs/testing';
import { FaceRecognitionGateway } from './face-recognition.gateway';
import { FaceRecognitionService } from './face-recognition.service';

describe('FaceRecognitionGateway', () => {
  let gateway: FaceRecognitionGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FaceRecognitionGateway, FaceRecognitionService],
    }).compile();

    gateway = module.get<FaceRecognitionGateway>(FaceRecognitionGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
