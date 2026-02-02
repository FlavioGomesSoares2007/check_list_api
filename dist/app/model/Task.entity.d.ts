import { type Relation } from "typeorm";
import { User } from "./User.entity.js";
export declare class Task {
    id_list: number;
    nome: string;
    concluido: boolean;
    id_user_id: number;
    id_user: Relation<User>;
}
//# sourceMappingURL=Task.entity.d.ts.map