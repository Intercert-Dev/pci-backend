import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from "typeorm";
import { User } from "../entities";
import { Role } from '../../../constants/authentication/userConstants';
import { ERROR_CODES } from "../../../constants/commonConstants";
import { generatePasswordHash } from "../../../utils/bcryptUtil";

@Injectable()
export class UserRepositoryService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}

    async createSuperAdmin(): Promise<User> {
        try{
        // Check if a super admin already exists
        // If it exists, throw an error to prevent duplicate super admins
        const existingUser = await this.userRepository.findOne({
            where: { email: 'superadmin@example.com' }
        });

        if (existingUser) {
            throw { message: "Super Admin already exists", statusCode: ERROR_CODES.BAD_REQUEST };
        }

        const hashedPassword = await generatePasswordHash('superadminpassword');

        const superAdmin = this.userRepository.create({
            name: 'Super Admin',
            email: 'superadmin@example.com',
            password: hashedPassword,
            role: Role.SUPER_ADMIN,
        });

        return this.userRepository.save(superAdmin);

        }catch(error) {
            console.error("Error in createSuperAdmin: ", error);
            throw error;
        }
    }

    async findOneByEmail(email: string) {
        try{
            const user = await this.userRepository.findOne({
                where: { email },
            });

            if (!user) {
                throw { message: "Email not Match.", statusCode: ERROR_CODES.NOT_FOUND };
            }

            return user;
        }catch (error) {
            console.error("Error in findByEmail: ", error);
            throw error;
        }
    }
}
