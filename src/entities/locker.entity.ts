import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'locker' })
export class Locker {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'uid', nullable: false })
  uid: string;
}
