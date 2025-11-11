import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DBModule } from '../../../../libs/database/src';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '../../../../libs/config/config.module';
import { ConfigService } from '../../../../libs/config/config.service';

@Module({
  imports: [
    DBModule.forRoot(),
    ConfigModule,
    TypeOrmModule.forFeature([ConfigService]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
