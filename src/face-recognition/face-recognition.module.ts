import { Module } from '@nestjs/common';
import { FaceRecognitionService } from './face-recognition.service';
import { FaceRecognitionGateway } from './face-recognition.gateway';

@Module({
  providers: [FaceRecognitionGateway, FaceRecognitionService]
})
export class FaceRecognitionModule {}
