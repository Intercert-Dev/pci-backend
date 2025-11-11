import { ConfigData } from './config.interface';

export const DEFAULT_CONFIG: ConfigData = {
  env: 'production',
  db: {
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '12341234',
    database: 'dev_db',
    type: 'mysql',
    synchronize: true,
    logging: false,
    entities: [],
  },
  logLevel: 'info',
  JWT_SECRET_KEY: '',
  JWT_EXPIRY_TIME: 0,
  AUTH_KEY: '',
  servicePorts: {
    authentication: 3000,
    client: 3001,
  },
};
