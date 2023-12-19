import { IsString, IsEmail, IsStrongPassword, IsUrl, Length } from "class-validator";
export class CreateUserDTO{
  @IsString()
  id!: string;

  @IsString()
  @Length(5, 20)
  username!: string;

  @IsEmail()
  email!: string;

  @IsStrongPassword({minLength: 5, minNumbers: 2})
  password!: string

  @IsUrl()
  avatarUrl?: string;
}