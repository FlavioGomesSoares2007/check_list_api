import { AuthService } from "../services/Auth.service.js";
const authService = new AuthService();
export class AuthController {
    async login(req, res) {
        try {
            const login = await authService.login(req.body);
            return res.status(200).json(login);
        }
        catch (err) {
            if (err?.message === "E-MAIL OU SENHA INVÁLIDOS") {
                return res.status(401).json("E-MAIL OU SENHA INVÁLIDOS");
            }
            return res.status(500).json("erro no sistema");
        }
    }
}
//# sourceMappingURL=Auth.controller.js.map