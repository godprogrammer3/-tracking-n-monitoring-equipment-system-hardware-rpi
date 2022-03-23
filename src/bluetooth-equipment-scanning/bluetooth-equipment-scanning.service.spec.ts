import { Test, TestingModule } from '@nestjs/testing';
import { BluetoothEquipmentScanningService } from './bluetooth-equipment-scanning.service';

describe('BluetoothEquipmentScanningService', () => {
  let service: BluetoothEquipmentScanningService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BluetoothEquipmentScanningService],
    }).compile();

    service = module.get<BluetoothEquipmentScanningService>(BluetoothEquipmentScanningService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
