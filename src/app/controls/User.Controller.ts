import { type Request, type Response } from "express";
import { UserService } from "../services/User.Service.js";

const userService = new UserService();
export class UserCrontroller {
  async createUser(req: Request, res: Response) {
    try {
      const user = await userService.create(req.body);
      return res.status(201).json(user);
    } catch (err: any) {
      if (err.message === "O E-MAIL JÁ ESTAR SENDO USADO") {
        return res.status(409).json({ message: "E-mail já está sendo usado" });
      }
      return res.status(500).json({ message: "Erro interno" });
    }
  }

  async seeData(req: Request, res: Response) {
    const id = Number(req.user?.id);
    try {
      const user = await userService.seeData(id);
      return res.status(200).json(user);
    } catch (err: any) {
      if (err?.message === "usuario nao encontrado") {
        return res.status(404).json({ message: "usuario nao encontrado" });
      }

      return res.status(500).json({ message: "Erro interno" });
    }
  }

  async update(req: Request, res: Response) {
    const id = Number(req.user?.id);
    try {
      const update = await userService.update(id, req.body);
      return res.status(200).json(update);
    } catch (err: any) {
      if (err?.message === "usuario nao encontrado") {
        return res.status(404).json({ message: "usuario nao encontrado" });
      }
      return res.status(500).json({ message: "Erro interno" });
    }
  }

  async delete(req:Request, res:Response){
    const id = Number(req.user?.id)
    try {
      const apagar = await userService.delete(id)
      return res.status(200).json(apagar)
    } catch (err: any) {
       if (err?.message === "usuario nao encontrado") {
        return res.status(404).json({ message: "usuario nao encontrado" });
      }
      return res.status(500).json({ message: "Erro interno" });
    }
  }
}
