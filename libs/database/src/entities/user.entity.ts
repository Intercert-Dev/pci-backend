import { Column, Entity,ManyToOne,OneToMany,PrimaryGeneratedColumn } from "typeorm";
import "reflect-metadata";
import { Role } from '../../../constants/authentication/userConstants'

@Entity('user')
export class User{
    @PrimaryGeneratedColumn("uuid")
    user_id: string;

    @Column()
    name: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column({
        type: 'enum',
        enum: Role,
    })
    role: Role;

    // Self-referencing to support hierarchy (created by which user)
    @ManyToOne(() => User, user => user.children, { nullable: true, onDelete: 'CASCADE' })
    createdBy: User;

    @OneToMany(() => User, user => user.createdBy)
    children: User[];

    @Column({ default: true })
    isActive: boolean;

}
