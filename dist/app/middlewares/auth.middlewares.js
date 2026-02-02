import "dotenv/config";
import Jwt, {} from "jsonwebtoken";
export async function authToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader?.split(" ")[1];
    if (!token) {
        return res.status(401).json({ message: "Acesso negado. Token não fornecido." });
    }
    Jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err || !decoded || typeof decoded === 'string') {
            return res.status(401).json({ message: "Token inválido." });
        }
        const dados = decoded;
        req.user = {
            id: Number(dados.id),
            email: dados.email
        };
        next();
    });
}
//# sourceMappingURL=auth.middlewares.js.map