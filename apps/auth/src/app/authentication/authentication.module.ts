import { Module } from '@nestjs/common';
import { AuthenticationController } from './authentication.controller';
import { AuthenticationService } from './authentication.service';
import { DBModule } from '../../../../../libs/database/src';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GoogleStrategy } from './strategies/google.strategy';
import { ConfigModule } from '../../../../../libs/config/config.module';
import { ConfigService } from '../../../../../libs/config/config.service';
import { ResponseHandlerModule } from '../../../../../libs/response-handler/response-handler.module';
import { PassportModule } from '@nestjs/passport';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { JwtService } from '../../../../../libs/jwt-service/jwt.service';
import { User } from '../../../../../libs/database/src/entities/user.entity';
import { PdfServiceModule } from 'libs/pdf-service/src/pdf-service.module';


@Module({
  imports: [
    PassportModule.register({ session: false }),
    DBModule.forRoot(),
    ConfigModule,
    ResponseHandlerModule,
    PdfServiceModule,
    TypeOrmModule.forFeature([ConfigService,User]),
  ],
  controllers: [AuthenticationController],
  providers: [AuthenticationService,GoogleStrategy,JwtService,JwtAuthGuard],
  exports: [JwtAuthGuard],
})
export class AuthenticationModule {}
