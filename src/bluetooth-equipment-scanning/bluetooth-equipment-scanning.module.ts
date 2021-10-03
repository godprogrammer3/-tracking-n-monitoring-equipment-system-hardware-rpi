import { Module } from '@nestjs/common';
import { BluetoothEquipmentScanningController } from './bluetooth-equipment-scanning.controller';
import { BluetoothEquipmentScanningService } from './bluetooth-equipment-scanning.service';

@Module({
  controllers: [BluetoothEquipmentScanningController],
  providers: [BluetoothEquipmentScanningService]
})
export class BluetoothEquipmentScanningModule {}
