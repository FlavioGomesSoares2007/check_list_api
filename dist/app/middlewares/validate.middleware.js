import { plainToInstance } from "class-transformer";
import { validate as ValidateDTO } from "class-validator";
export function validate(DTO) {
    return async (req, res, next) => {
        const dto = plainToInstance(DTO, req.body);
        const error = await ValidateDTO(dto);
        if (error.length > 0) {
            return res.status(400).json(error);
        }
        req.body = dto;
        next();
    };
}
//# sourceMappingURL=validate.middleware.js.map