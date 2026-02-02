import { request, type Request, type Response } from "express";
import { TaskService } from "../services/Tesk.service.js";
import type { DtoTask } from "../DTOs/task/Task.Dto.js";

const taskService = new TaskService();

export class TaskController {
  async create(req: Request, res: Response) {
    try {
      const task = await taskService.create(req.body, Number(req.user?.id));
      return res.status(200).json(task);
    } catch (err: any) {
      if (err?.message === "usuario nao encontrado") {
        return res.status(404).json({ message: "usuario nao encontrado" });
      }
      return res.status(500).json({ message: "Erro interno" });
    }
  }

  async seeData(req: Request, res: Response) {
    try {
      const task = await taskService.seeData(Number(req.user?.id));
      return res.status(200).json(task);
    } catch (err: any) {
      if (err?.message === "Nenhuma tarefa encontrada para este usuário.") {
        return res
          .status(404)
          .json({ message: "Nenhuma tarefa encontrada para este usuário." });
      }
      return res.status(500).json({ message: "Erro interno" });
    }
  }

  async update(req: Request, res: Response) {
    const id_list: number = Number(req.params.id);
    const id_user: number = Number(req.user?.id);
    const dados: DtoTask = req.body;
    try {
      const task = await taskService.update(id_list, id_user, dados);
      return res.status(200).json(task);
    } catch (err: any) {
      if (err?.message === "tarefa do usuario não encontrada")
        return res
          .status(404)
          .json({ message: "tarefa do usuario não encontrada" });
    }
    return res.status(500).json({ message: "Erro interno" });
  }

  async delete(req: Request, res: Response) {
    try {
      const task = await taskService.delete(Number(req.params.id));
      return res.status(200).json(task);
    } catch (err: any) {
      if (err?.message === "tarefa do usuario não encontrada") {
        return res
          .status(404)
          .json({ message: "tarefa do usuario não encontrada" });
      }
      return res.status(500).json({ message: "Erro interno" });
    }
  }
}
