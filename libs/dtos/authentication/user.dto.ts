import { IsEmail, IsEnum, IsNotEmpty } from 'class-validator';
import { Role } from '../../constants/authentication/userConstants';
import 'reflect-metadata';


export class CreateUserDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
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