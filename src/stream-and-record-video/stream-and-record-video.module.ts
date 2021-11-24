import { Module } from '@nestjs/common';
import { StreamAndRecordVideoService } from './stream-and-record-video.service';
import { StreamAndRecordVideoGateway } from './stream-and-record-video.gateway';

@Module({
  providers: [StreamAndRecordVideoGateway, StreamAndRecordVideoService]
})
export class StreamAndRecordVideoModule {}
