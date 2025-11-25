import { IsEmail, IsEnum, IsNotEmpty } from 'class-validator';
import { Role } from '../../constants/authentication/userConstants';
import { Transform } from 'class-transformer';
import 'reflect-metadata';


export class CreateUserDto {
  @IsNotEmpty()
  @Transform(({ value }) => value?.trim())
  name: string;

  @IsEmail()
  @Transform(({ value }) => value?.trim())
  email: string;

  @IsNotEmpty()
  @Transform(({ value }) => value?.trim())
  password: string;

  @IsEnum(Role)
  role: Role;
}

export class AdminLoginDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}