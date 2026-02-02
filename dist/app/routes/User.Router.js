import express from "express";
import { UserController } from "../controls/User.Controller.js";
import { validate } from '../middlewares/validate.middleware.js';
import { DtoUser } from "../DTOs/User.Dto.js";
import { AuthController } from "../controls/Auth.controller.js";
const userController = new UserController;
const authController = new AuthController;
const router = express.Router();
router.post("/", validate(DtoUser), userController.createUser);
router.post("/login", validate(DtoUser), authController.login);
export default router;
//# sourceMappingURL=User.Router.js.map