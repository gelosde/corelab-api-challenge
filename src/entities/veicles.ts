import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity()
export class veicleTable {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ unique: true })
  plate: string;

  @Column()
  color: string;

  @Column({ default: false })
  isFavorite: boolean;

  @Column({ type: "date" })
  year: string;

  @Column({ type: "float" })
  price_max: number;

  @Column({ type: "float" })
  price_min: number;
  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
