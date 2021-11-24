import { WebSocketGateway } from '@nestjs/websockets';
import { StreamAndRecordVideoService } from './stream-and-record-video.service';

@WebSocketGateway()
export class StreamAndRecordVideoGateway {
  constructor(private readonly streamAndRecordVideoService: StreamAndRecordVideoService) {}
}
