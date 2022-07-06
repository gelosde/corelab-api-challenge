import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class veicleTable {
  @PrimaryGeneratedColumn("uuid")
  id: string;

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

  @Column()
  price: number;

  @Column({ type: "date" })
  createdAt: string;
}
