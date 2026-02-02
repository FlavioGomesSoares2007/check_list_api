import express from "express";
import { validate } from "../middlewares/validate.middlewares.js";
import { DtoUser } from "../DTOs/user/User.Dto.js";
import { UserCrontroller } from "../controls/User.Controller.js";
import { authToken } from "../middlewares/auth.middlewares.js";

const userCrontroller = new UserCrontroller();
const router = express.Router();

router.post("/", validate(DtoUser), userCrontroller.createUser);
router.get("/dados", authToken, userCrontroller.seeData);
router.patch(
  "/atualizar",
  authToken,
  validate(DtoUser),
  userCrontroller.update,
);
router.delete("/deleta", authToken, userCrontroller.delete);

export default router;
