export interface ConfigDatabase {
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
  type: string;
  synchronize: boolean;
  logging: boolean;
  url?: string;
  entities: any[];
}

export interface ServicesPort {
  authentication: number;
  client: number;
}

export interface ConfigData {
  env: string;
  db: ConfigDatabase;
  servicePorts: ServicesPort;
  logLevel: string;
  JWT_SECRET_KEY: string;
  JWT_EXPIRY_TIME: number;
  AUTH_KEY: string;
}
