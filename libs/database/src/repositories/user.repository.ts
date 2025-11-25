import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from "typeorm";
import { User } from "../entities";
import { Role } from '../../../constants/authentication/userConstants';
import { ERROR_CODES } from "../../../constants/commonConstants";
import { generatePasswordHash } from "../../../utils/bcryptUtil";
import {CreateUserDto } from 'libs/dtos/authentication/user.dto';

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
            where: { email: 'anshumaan.tiwari@intercert.com' }
        });

        if (existingUser) {
            throw { message: "Super Admin already exists", statusCode: ERROR_CODES.BAD_REQUEST };
        }

        const hashedPassword = await generatePasswordHash('superadminpassword');

        const superAdmin = this.userRepository.create({
            name: 'Super Admin',
            email: 'anshumaan.tiwari@intercert.com',
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



    async createUser(createUser: CreateUserDto,userdata:any): Promise<User> {
        try {
            const existingUser = await this.userRepository.findOne({
                where: { email: createUser.email }
            });

            if (existingUser) {
                throw { message: "This Email already exists", statusCode: ERROR_CODES.BAD_REQUEST };
            }

            const hashedPassword = await generatePasswordHash(createUser.password);

            const user = this.userRepository.create({
                name: createUser.name,
                email: createUser.email,
                password: hashedPassword,
                role: createUser.role,
                createdBy:userdata
            });

            console.log('New User to be created: ', user);
            return await this.userRepository.save(user);
        } catch (error) {
            console.log('Error creating user in repository:', error);
            throw error;
        }
    }

    async getAllUsers(): Promise<User[]> {
    try {
        const users = await this.userRepository.find({
            relations: {
                createdBy: true, // This will load the full createdBy user object
            },
            select: {
                user_id: true,
                name: true,
                email: true,
                role: true,
                isActive: true,
                created_at: true,
                updated_at: true,
                createdBy: {
                    user_id: true,
                    name: true,
                    email: true,
                    role: true
                },
            },
            order: {
                created_at: 'DESC'
            }
        });
        return users;
    } catch (error) {
        console.error("Error in getAllUsers: ", error);
        throw error;
    }
}

}
