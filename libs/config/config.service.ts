import { Injectable } from '@nestjs/common';
import { ConfigData, ConfigDatabase, ServicesPort } from './config.interface';
import { DEFAULT_CONFIG } from './config.default';
import { config } from 'dotenv';
config();

@Injectable()
export class ConfigService {
  private config: ConfigData;

  constructor(data: ConfigData = DEFAULT_CONFIG) {
    this.config = data;
  }

  public loadFromEnv() {
    this.config = this.parseConfigFromEnv(process.env);
  }

  private parseConfigFromEnv(env: NodeJS.ProcessEnv): ConfigData {
    return {
      env: env.NODE_ENV || DEFAULT_CONFIG.env,
      db: this.parseDBConfig(env, DEFAULT_CONFIG.db),
      servicePorts: this.parseServicePorts(env, DEFAULT_CONFIG.servicePorts),
      logLevel: env.LOG_LEVEL || DEFAULT_CONFIG.logLevel,
      JWT_SECRET_KEY: env.JWT_SECRET_KEY || '',
      JWT_EXPIRY_TIME: Number(env.JWT_EXPIRY_TIME) || 3600,
      AUTH_KEY: env.AUTH_KEY || '',
    };
  }

  private parseDBConfig(env: NodeJS.ProcessEnv, defaultConfig: Readonly<ConfigDatabase>): ConfigDatabase {
    return {
      host: env.DB_HOST || defaultConfig.host,
      port: Number(env.DB_PORT) || defaultConfig.port,
      username: env.DB_USERNAME || defaultConfig.username,
      password: env.DB_PASSWORD || defaultConfig.password,
      database: env.DB_DATABASE || defaultConfig.database,
      type: 'mysql', // <-- Ensure it's MySQL
      synchronize: true,
      logging: false,
      entities: [],
    };
  }

  private parseServicePorts(env: NodeJS.ProcessEnv, defaultConfig: Readonly<ServicesPort>): ServicesPort {
    return {
      authentication: Number(env.AUTHENTICATION_PORT) || defaultConfig.authentication,
      client: Number(env.CLIENT_PORT) || defaultConfig.client,
    };
  }

  public get configData(): ConfigData {
    return this.config;
  }

  // ✅ Add this
  public get(): ConfigData {
    return this.config;
  }

}
