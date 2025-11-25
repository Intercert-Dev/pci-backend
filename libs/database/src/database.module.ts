import { Module } from '@nestjs/common';
import { ConfigService } from '../../config/config.service';
import { ConfigModule } from '../../config/config.module';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigDatabase } from '../../config/config.interface';
import { User } from './entities/user.entity';
import { Client } from './entities/client.entity';
import { Session } from './entities/session.entity';
import { UserRepositoryService } from './repositories/user.repository';
import {SessionRepositoryService} from './repositories/session.repository';
import {ClientRepositoryService} from './repositories/client.repository';
import { TransactionManager } from './repositories/utils';
import { DataSource } from 'typeorm';

@Module({})
export class DBModule {

    private static getConnectionOptions(config: ConfigService): TypeOrmModuleOptions {
        const dbData = config.get().db;
        if (!dbData) {
            throw new Error('Database configuration not found');
        }
        const connectionOptions = this.getConnectionOptionsMySQL(dbData);
        return {
            ...connectionOptions,
            entities: [User,Session,Client],
            synchronize: true,   // Set to false in production
            logging: false,
            migrationsRun: false,
        };
    }

    private static getConnectionOptionsMySQL(dbData: ConfigDatabase): TypeOrmModuleOptions {
        const {
            database,
            host,
            logging,
            password,
            port,
            synchronize,
            username,
        } = dbData;

        return {
            type: 'mysql',
            host,
            port,
            username,
            password,
            database,
            logging,
            synchronize,
            entities: [User,Session,Client], // Alternatively let TypeORM auto-load entities
        };
    }

    public static forRoot() {
        return {
            module: DBModule,
            imports: [
                TypeOrmModule.forRootAsync({
                    imports: [ConfigModule],
                    useFactory: (configService: ConfigService) => {
                        return DBModule.getConnectionOptions(configService);
                    },
                    inject: [ConfigService],
                }),
                TypeOrmModule.forFeature([ User,Session,Client]),
            ],
            controllers: [],
            providers: [
                UserRepositoryService,SessionRepositoryService,ClientRepositoryService,
                {
                    provide: TransactionManager,
                    useFactory: (dataSource: DataSource) => new TransactionManager(dataSource),
                    inject: [DataSource],
                },
            ],
            exports: [UserRepositoryService,SessionRepositoryService,ClientRepositoryService],
        };
    }
}
