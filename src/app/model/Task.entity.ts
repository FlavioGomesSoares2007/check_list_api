import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  type Relation,
} from "typeorm";
import { User } from "./User.entity.js";

@Entity("task")
export class Task {
  @PrimaryGeneratedColumn({ name: "id_list" })
  id_list!: number;

  @Column({ name: "nome", type: "varchar", length: 100 })
  nome!: string;

  @Column({ name: "concluido", type: "boolean", default: false })
  concluido!: boolean;

  @Column({ name: "id_user" })
  id_user_id!: number;

  @ManyToOne(() => User, (user) => user.task)
  @JoinColumn({ name: "id_user" })
  id_user!: Relation<User>;
}
