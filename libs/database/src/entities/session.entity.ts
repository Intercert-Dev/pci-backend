import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from 'typeorm';
import { User } from './user.entity'; // adjust path

@Entity('session')
export class Session {
  @PrimaryGeneratedColumn('uuid')
  sessionId: string;

  // FK stored in DB
  @Column()
  userId: string;

  @ManyToOne(() => User, user => user.sessions, { onDelete: 'CASCADE' })
  user: User;

  @Column()
  userEmail: string;

  @Column({ type: 'text' })
  token: string;

  @Column({ type: 'simple-json', nullable: true })
  googleCallbackData: any;

  @Column({ type: 'timestamp' })
  expiresAt: Date;

  @CreateDateColumn()
  createdAt: Date;
}
