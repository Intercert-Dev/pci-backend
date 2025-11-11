import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Role } from 'libs/constants/authentication/userConstants';
import { UserRepositoryService } from 'libs/database/src';
import { AdminLoginDto } from 'libs/dtos/authentication/user.dto';
import { ERROR_CODES } from "libs/constants/commonConstants";
import { checkPasswordHash } from "libs/utils/bcryptUtil";

@Injectable()
export class AuthenticationService {
    constructor(
        private readonly userRepositoryService: UserRepositoryService,
    ) {}

    async registerSuperAdmin(){
        try{
            const superAdmin = await this.userRepositoryService.createSuperAdmin();
            return {message: "Super Admin registered successfully", data: superAdmin};
        }catch(error){
            console.log("Error in registerSuperAdmin Service: ", error);
            throw error;
        }
    }

    // Method to handle super admin login
    async loginSuperAdmin(loginDto: AdminLoginDto) {
        try {
            // Logic for super admin login
            const { email, password } = loginDto;
            const user = await this.userRepositoryService.findOneByEmail(email);
            if (user.role !== Role.SUPER_ADMIN) {
                throw { message: "Role not Match Access denied..", statusCode: ERROR_CODES.NOT_FOUND };
            }

            // Validate password using bcrypt
            const isPasswordValid = await checkPasswordHash(password, user.password);
            // Validate password (this is just a placeholder, implement your actual password validation logic)
            if (!isPasswordValid) {
                throw { message: "Invalid password", statusCode: ERROR_CODES.NOT_AUTHORIZED };
            }
            // If login is successful, return user data or token


            return { message: 'Super Admin logged in successfully', data: user };
        } catch (error) {
            console.log("Error in loginSuperAdmin Service: ", error);
            throw error;
        }
    }
}
