import * as bcrypt from "bcrypt";
import { AppDataSource } from "../database/data-source.js";
import { User } from "../model/User.entity.js";
export class UserService {
    constructor() {
        this.userRepo = AppDataSource.getRepository(User);
    }
    async create(dados) {
        const existe = await this.userRepo.findOne({
            where: { email: dados.email },
        });
        if (existe) {
            throw new Error("O E-MAIL JÁ ESTAR SENDO USADO");
        }
        const senhaHash = await bcrypt.hash(dados.senha, 10);
        const user = await this.userRepo.create({
            email: dados.email,
            senha_hash: senhaHash,
        });
        return await this.userRepo.save(user);
    }
    async seeData(id) {
        const exist = await this.userRepo.findOne({
            where: { id_user: id },
            relations: ["task"]
        });
        if (!exist) {
            throw new Error("usuario nao encontrado");
        }
        return exist;
    }
    async update(id, dados) {
        const exist = await this.userRepo.findOne({
            where: { id_user: id },
        });
        if (!exist) {
            throw new Error("usuario nao encontrado");
        }
        if (dados.senha) {
            exist.senha_hash = await bcrypt.hash(dados.senha, 10);
            delete dados.senha;
        }
        this.userRepo.merge(exist, dados);
        return await this.userRepo.save(exist);
    }
    async delete(id) {
        const user = await this.userRepo.findOne({
            where: { id_user: id },
        });
        if (!user) {
            throw new Error("usuario nao encontrado");
        }
        return await this.userRepo.remove(user);
    }
}
//# sourceMappingURL=User.Service.js.map