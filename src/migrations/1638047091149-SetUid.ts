import { MigrationInterface, QueryRunner } from 'typeorm';
import { Locker } from 'src/entities/locker.entity';
import { v4 as uuidv4 } from 'uuid';
export class SetUid1638047091149 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const existedLockers = await queryRunner.manager
      .getRepository(Locker)
      .find();
    if (existedLockers.length == 0) {
      const locker = queryRunner.manager
        .getRepository(Locker)
        .create({ uid: uuidv4() });
      await queryRunner.manager.getRepository(Locker).save(locker);
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.delete('locker', true);
  }
}
