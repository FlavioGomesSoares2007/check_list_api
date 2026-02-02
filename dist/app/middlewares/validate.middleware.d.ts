import type { Request, Response, NextFunction } from "express";
export declare function validate(DTO: any): (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=validate.middleware.d.ts.map