// import { Injectable } from '@nestjs/common';
// import { ConfigData, ConfigDatabase, ServicesPort } from './config.interface';
// import { DEFAULT_CONFIG } from './config.default';
// import { config } from 'dotenv';
// config();

// @Injectable()
// export class ConfigService {
//   private config: ConfigData;

//   constructor(data: ConfigData = DEFAULT_CONFIG) {
//     this.config = data;
//   }

//   public loadFromEnv() {
//     this.config = this.parseConfigFromEnv(process.env);
//   }

//   private parseConfigFromEnv(env: NodeJS.ProcessEnv): ConfigData {
//     return {
//       env: env.NODE_ENV || DEFAULT_CONFIG.env,
//       db: this.parseDBConfig(env, DEFAULT_CONFIG.db),
//       servicePorts: this.parseServicePorts(env, DEFAULT_CONFIG.servicePorts),
//       logLevel: env.LOG_LEVEL || DEFAULT_CONFIG.logLevel,
//       JWT_SECRET_KEY: env.JWT_SECRET_KEY || '',
//       JWT_EXPIRY_TIME: Number(env.JWT_EXPIRY_TIME) || 3600,
//       AUTH_KEY: env.AUTH_KEY || '',
//     };
//   }

//   private parseDBConfig(env: NodeJS.ProcessEnv, defaultConfig: Readonly<ConfigDatabase>): ConfigDatabase {
//     return {
//       host: env.DB_HOST || defaultConfig.host,
//       port: Number(env.DB_PORT) || defaultConfig.port,
//       username: env.DB_USERNAME || defaultConfig.username,
//       password: env.DB_PASSWORD || defaultConfig.password,
//       database: env.DB_DATABASE || defaultConfig.database,
//       type: 'mysql', // <-- Ensure it's MySQL
//       synchronize: true,
//       logging: false,
//       entities: [],
//     };
//   }

//   private parseServicePorts(env: NodeJS.ProcessEnv, defaultConfig: Readonly<ServicesPort>): ServicesPort {
//     return {
//       authentication: Number(env.AUTHENTICATION_PORT) || defaultConfig.authentication,
//       client: Number(env.CLIENT_PORT) || defaultConfig.client,
//     };
//   }

//   public get configData(): ConfigData {
//     return this.config;
//   }

//   // ✅ Add this
//   public get(): ConfigData {
//     return this.config;
//   }

// }




import { Injectable } from '@nestjs/common';
import { ConfigData, ConfigDatabase, ServicesPort } from './config.interface';
import { DEFAULT_CONFIG } from './config.default';
import { config } from 'dotenv';

config(); // Load environment variables from .env file

@Injectable()
export class ConfigService {
  private config: ConfigData;

  constructor(data: ConfigData = DEFAULT_CONFIG) {
    this.config = data;
  }

  // Load full config from env (if using structured approach)
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

  // Returns the full config object
  public get configData(): ConfigData {
    return this.config;
  }

  // Alias for above
  public get(): ConfigData {
    return this.config;
  }

  // ✅ NEW: Get a specific env variable safely
  public getEnv(key: string): string | undefined {
    return process.env[key];
  }

  // ✅ NEW: Get env variable OR throw error if it's missing (used for required secrets)
  public getEnvOrThrow(key: string): string {
    const value = process.env[key];
    if (!value) {
      throw new Error(`Missing required environment variable: ${key}`);
    }
    return value;
  }
}
