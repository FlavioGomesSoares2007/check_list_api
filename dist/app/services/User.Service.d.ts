import type { DtoUser } from "../DTOs/user/User.Dto.js";
import { User } from "../model/User.entity.js";
import type { DtoUpdate } from "../DTOs/user/Update.Dto.js";
export declare class UserService {
    private userRepo;
    create(dados: DtoUser): Promise<User>;
    seeData(id: number): Promise<User>;
    update(id: number, dados: DtoUpdate): Promise<User>;
    delete(id: number): Promise<User>;
}
//# sourceMappingURL=User.Service.d.ts.map