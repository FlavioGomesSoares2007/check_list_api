import Express from "express";
import { validate } from "../middlewares/validate.middlewares.js";
import { DtoTask } from "../DTOs/task/Task.Dto.js";
import { authToken } from "../middlewares/auth.middlewares.js";
import { TaskController } from "../controls/Task.Controller.js";
const taskController = new TaskController();
const router = Express.Router();
router.post("/", validate(DtoTask), authToken, taskController.create);
router.get("/tarefas", authToken, taskController.seeData);
router.patch("/atualizar/:id", validate(DtoTask), authToken, taskController.update);
router.delete("/deleta/:id", authToken, taskController.delete);
export default router;
//# sourceMappingURL=Task.Routes.js.map