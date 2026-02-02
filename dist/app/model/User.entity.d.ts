import { type Relation } from "typeorm";
import { Task } from "./Task.entity.js";
export declare class User {
    id_user: number;
    email: string;
    senha_hash: string;
    criado_em: Date;
    task: Relation<Task[]>;
}
//# sourceMappingURL=User.entity.d.ts.map