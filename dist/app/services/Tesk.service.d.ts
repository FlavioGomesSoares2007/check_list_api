import type { DtoTask } from "../DTOs/task/Task.Dto.js";
import { Task } from "../model/Task.entity.js";
export declare class TaskService {
    private userRepo;
    private taskRepo;
    create(dados: DtoTask, id: number): Promise<Task>;
    seeData(id: number): Promise<Task[]>;
    update(id_list: number, id_user: number, dados: DtoTask): Promise<Task>;
    delete(id_list: number): Promise<Task>;
}
//# sourceMappingURL=Tesk.service.d.ts.map