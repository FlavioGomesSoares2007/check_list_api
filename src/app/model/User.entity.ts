import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
  type Relation,
} from "typeorm";
import { Task } from "./Task.entity.js";

@Entity("user")
@Unique(["email"])
export class User {
  @PrimaryGeneratedColumn({ name: "id_user" })
  id_user!: number;

  @Column({ name: "email", type: "varchar", length: 200 })
  email!: string;

  @Column({ name: "senha_hash", type: "text" })
  senha_hash!: string;

  @CreateDateColumn({ name: "criado_em" })
  criado_em!: Date;

  @OneToMany(() => Task, (task) => task.id_user)
  task!: Relation<Task[]>;
}
