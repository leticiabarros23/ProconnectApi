import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken/promises";

interface TokenPayload {
  sub: number;
  email: string;
  iat: number;
  exp: number;
}

export async function authenticate(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ error: "Token não fornecido." });
  }

  const [, token] = authHeader.split(" ");
  if (!token) {
    return res.status(401).json({ error: "Formato de token inválido." });
  }

  try {
    const payload = (await verify(
      token,
      process.env.JWT_SECRET!
    )) as TokenPayload;

    req.user = { id: payload.sub, email: payload.email };
    return next();
  } catch {
    return res.status(401).json({ error: "Token inválido ou expirado." });
  }
}
