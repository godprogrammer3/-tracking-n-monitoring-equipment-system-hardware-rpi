import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BluetoothEquipmentScanningModule } from './bluetooth-equipment-scanning/bluetooth-equipment-scanning.module';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
