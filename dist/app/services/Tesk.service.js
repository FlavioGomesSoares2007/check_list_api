import { AppDataSource } from "../database/data-source.js";
import { Task } from "../model/Task.entity.js";
import { User } from "../model/User.entity.js";
export class TaskService {
    constructor() {
        this.userRepo = AppDataSource.getRepository(User);
        this.taskRepo = AppDataSource.getRepository(Task);
    }
    async create(dados, id) {
        const user = await this.userRepo.findOne({
            where: { id_user: id },
        });
        if (!user) {
            throw new Error("usuario nao encontrado");
        }
        const task = await this.taskRepo.create({
            ...dados,
            id_user: { id_user: id },
        });
        return await this.taskRepo.save(task);
    }
    async seeData(id) {
        const task = await this.taskRepo.find({
            where: { id_user_id: id },
        });
        if (task.length === 0) {
            throw new Error("Nenhuma tarefa encontrada para este usuário.");
        }
        return task;
    }
    async update(id_list, id_user, dados) {
        const task = await this.taskRepo.findOne({
            where: {
                id_list: id_list,
                id_user_id: id_user,
            },
        });
        if (!task) {
            throw new Error("tarefa do usuario não encontrada");
        }
        this.taskRepo.merge(task, dados);
        return await this.taskRepo.save(task);
    }
    async delete(id_list) {
        const task = await this.taskRepo.findOne({
            where: { id_list: id_list }
        });
        if (!task) {
            throw new Error("tarefa do usuario não encontrada");
        }
        return this.taskRepo.remove(task);
    }
}
//# sourceMappingURL=Tesk.service.js.map