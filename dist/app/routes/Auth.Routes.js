import { validate } from "../middlewares/validate.middlewares.js";
import { AuthController } from "../controls/Auth.controller.js";
import express from "express";
import { DtoUser } from "../DTOs/user/User.Dto.js";
import { authToken } from "../middlewares/auth.middlewares.js";
const authController = new AuthController();
const router = express.Router();
router.post("/", validate(DtoUser), authController.login);
export default router;
//# sourceMappingURL=Auth.Routes.js.map