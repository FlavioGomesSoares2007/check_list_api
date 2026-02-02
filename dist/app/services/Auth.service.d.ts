import "dotenv/config";
import type { DtoUser } from "../DTOs/user/User.Dto.js";
export declare class AuthService {
    private userRepo;
    login(dados: DtoUser): Promise<string>;
}
//# sourceMappingURL=Auth.service.d.ts.map