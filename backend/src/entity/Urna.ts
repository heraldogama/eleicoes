import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Urna {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  address: string;

  @Column()
  school: string;

  @Column()
  latitude: number;

  @Column()
  longitude: number;
}
