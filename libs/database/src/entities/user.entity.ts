import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn
} from "typeorm";

import "reflect-metadata";
import { Role } from '../../../constants/authentication/userConstants'
import { Session } from "./session.entity"; // adjust path
import { Client } from "./client.entity"; // adjust path

@Entity('user')
export class User {
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

    @ManyToOne(() => User, user => user.children, { nullable: true, onDelete: 'CASCADE' })
    createdBy: User;

    @OneToMany(() => User, user => user.createdBy)
    children: User[];

    @OneToMany(() => Client, client => client.createdBy)
    clients: Client[];

    @Column({ default: true })
    isActive: boolean;

    // ⭐ Relation to Sessions
    @OneToMany(() => Session, session => session.user)
    sessions: Session[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
