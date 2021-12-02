import { WebSocketGateway } from '@nestjs/websockets';
import { FaceRecognitionService } from './face-recognition.service';

@WebSocketGateway()
export class FaceRecognitionGateway {
  constructor(
    private readonly faceRecognitionService: FaceRecognitionService,
  ) {}
}
