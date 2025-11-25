import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../../../../../libs/database/src/entities/user.entity';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers['authorization'] || request.headers['Authorization'];

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedException('Authorization token missing');
    }

    const token = authHeader.split(' ')[1];
    const secret = process.env.JWT_SECRET_KEY;
    
    if (!secret) {
      throw new UnauthorizedException('JWT secret not configured');
    }

    try {
      // Verify token and extract payload
      console.log("JWT Secret: ", token);
      const decoded = jwt.verify(token, secret) as { userId: string; email?: string };
      console.log("Decoded JWT Token: ", decoded);

      // Look up user in database
      const user = await this.userRepository.findOne({
        where: { user_id: decoded.userId },
      });
      console.log("Authenticated User from DB: ", user);

      if (!user) {
        throw new UnauthorizedException('User not found');
      }

      // ✅ Attach user to request object
      request.user = user;

      // Allow request to proceed
      return true;
    } catch (error) {
      console.error('JWT verification failed:', error.message);
      throw new UnauthorizedException('Invalid or expired token');
    }
  }
}
