import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DBModule } from '../../../../libs/database/src';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '../../../../libs/config/config.module';
import { ConfigService } from '../../../../libs/config/config.service';
import { AuthenticationModule } from './authentication/authentication.module';
import { ResponseHandlerService } from '../../../../libs/response-handler/response-handler.service';
import { PdfServiceModule } from 'libs/pdf-service';

@Module({
  imports: [
    DBModule.forRoot(),
    ConfigModule,
    TypeOrmModule.forFeature([ConfigService]),
    AuthenticationModule,
    PdfServiceModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
