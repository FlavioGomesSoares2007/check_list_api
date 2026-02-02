import { type Request, type Response } from "express";
export declare class TaskController {
    create(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    seeData(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    update(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    delete(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
//# sourceMappingURL=Task.Controller.d.ts.map