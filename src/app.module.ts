import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BluetoothEquipmentScanningModule } from './bluetooth-equipment-scanning/bluetooth-equipment-scanning.module';
import { StreamAndRecordVideoModule } from './stream-and-record-video/stream-and-record-video.module';

@Module({
  imports: [StreamAndRecordVideoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
