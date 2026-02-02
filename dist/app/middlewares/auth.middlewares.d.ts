import "dotenv/config";
import type { Request, Response, NextFunction } from "express";
export declare function authToken(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=auth.middlewares.d.ts.map