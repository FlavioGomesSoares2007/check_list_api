import "dotenv/config";
import type { Request, Response, NextFunction } from "express";
import Jwt, { type JwtPayload } from "jsonwebtoken";

interface MyTokenPayload extends JwtPayload {
  id: number;
  email: string;
}

export async function authToken(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const authHeader = req.headers["authorization"];
  const token = authHeader?.split(" ")[1];

  if (!token) {
   return  res.status(401).json({ message: "Acesso negado. Token não fornecido." });
  }

  Jwt.verify(token!, process.env.JWT_SECRET!, (err, decoded) => {
    if (err || !decoded || typeof decoded === 'string') {
      return res.status(401).json({ message: "Token inválido." });
    }
    const dados = decoded as MyTokenPayload
    
    req.user = {
        id: Number(dados.id),
        email: dados.email 
    };
    next();
  });
}
