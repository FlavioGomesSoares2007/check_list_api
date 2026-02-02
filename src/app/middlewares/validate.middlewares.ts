import { plainToInstance } from "class-transformer";
import type { Request, Response, NextFunction } from "express";
import { validate as ValidateDTO } from "class-validator";

export function validate(DTO: any) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const dto = plainToInstance(DTO, req.body);

    const error = await ValidateDTO(dto);

    if (error.length > 0) {
      return res.status(400).json(error);
    }

    req.body = dto;
    next();
  };
}
