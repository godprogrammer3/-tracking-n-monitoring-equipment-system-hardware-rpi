import { Controller, Get } from '@nestjs/common';
import { BluetoothEquipmentScanningService } from './bluetooth-equipment-scanning.service';

@Controller('bluetooth-equipment-scanning')
export class BluetoothEquipmentScanningController {
    constructor(
        private bluetoothEquipmentScanningService: BluetoothEquipmentScanningService
    ){}
    @Get('scan')
    async scan(): Promise<string[]>{
        return this.bluetoothEquipmentScanningService.scan();
    }
}
