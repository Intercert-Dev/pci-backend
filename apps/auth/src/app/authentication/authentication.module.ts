import { Module } from '@nestjs/common';
import { AuthenticationController } from './authentication.controller';
import { AuthenticationService } from './authentication.service';
import { DBModule } from '../../../../../libs/database/src';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '../../../../../libs/config/config.module';
import { ConfigService } from '../../../../../libs/config/config.service';
import { ResponseHandlerModule } from '../../../../../libs/response-handler/response-handler.module';


@Module({
  imports: [
    DBModule.forRoot(),
    ConfigModule,
    ResponseHandlerModule,
    TypeOrmModule.forFeature([ConfigService]),
  ],
  controllers: [AuthenticationController],
  providers: [AuthenticationService],
})
export class AuthenticationModule {}
