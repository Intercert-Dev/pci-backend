import { Module } from '@nestjs/common';
import { ConfigService } from '../../config/config.service';
import { ConfigModule } from '../../config/config.module';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigDatabase } from '../../config/config.interface';
import { User } from './entities/user.entity';
import { UserRepositoryService } from './repositories/user.repository';
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
            entities: [User],
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
            entities: [User], // Alternatively let TypeORM auto-load entities
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
                TypeOrmModule.forFeature([ User]),
            ],
            controllers: [],
            providers: [
                UserRepositoryService,
                {
                    provide: TransactionManager,
                    useFactory: (dataSource: DataSource) => new TransactionManager(dataSource),
                    inject: [DataSource],
                },
            ],
            exports: [UserRepositoryService],
        };
    }
}
