import { IsBoolean, IsOptional, IsString } from "class-validator";

export class DtoTask {
  @IsString()
  nome!: string;

  @IsOptional()
  @IsBoolean()
  concluido?: boolean
}
