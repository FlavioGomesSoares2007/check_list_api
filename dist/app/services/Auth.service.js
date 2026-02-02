import "dotenv/config";
import * as bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";
import { User } from "../model/User.entity.js";
import { AppDataSource } from "../database/data-source.js";
export class AuthService {
    constructor() {
        this.userRepo = AppDataSource.getRepository(User);
    }
    async login(dados) {
        const user = await this.userRepo.findOne({
            where: { email: dados.email },
        });
        if (!user) {
            throw new Error("E-MAIL OU SENHA INVÁLIDOS");
        }
        const senhaValida = await bcrypt.compare(dados.senha, user.senha_hash);
        if (!senhaValida) {
            throw new Error("E-MAIL OU SENHA INVÁLIDOS");
        }
        const payload = {
            id: user.id_user,
            email: user.email,
        };
        const token = Jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: "24h",
        });
        return token;
    }
}
//# sourceMappingURL=Auth.service.js.map