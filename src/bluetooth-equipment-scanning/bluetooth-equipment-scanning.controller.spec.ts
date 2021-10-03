import { Test, TestingModule } from '@nestjs/testing';
import { BluetoothEquipmentScanningController } from './bluetooth-equipment-scanning.controller';

describe('BluetoothEquipmentScanningController', () => {
  let controller: BluetoothEquipmentScanningController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BluetoothEquipmentScanningController],
    }).compile();

    controller = module.get<BluetoothEquipmentScanningController>(BluetoothEquipmentScanningController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
