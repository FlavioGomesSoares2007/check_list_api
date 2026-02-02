import { IsEmail, IsString, MinLength } from "class-validator";

export class DtoUpdate {
  @IsEmail()
  email?: string;

  @IsString()
  @MinLength(6)
  senha?: string;
}
