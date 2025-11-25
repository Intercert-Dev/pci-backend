/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// import { Injectable } from '@nestjs/common';
// import { ConfigData, ConfigDatabase, ServicesPort } from './config.interface';
// import { DEFAULT_CONFIG } from './config.default';
// import { config } from 'dotenv';
// config();
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConfigService = void 0;
const tslib_1 = __webpack_require__(4);
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
const common_1 = __webpack_require__(1);
const config_interface_1 = __webpack_require__(5);
const config_default_1 = __webpack_require__(6);
const dotenv_1 = __webpack_require__(7);
(0, dotenv_1.config)(); // Load environment variables from .env file
let ConfigService = class ConfigService {
    constructor(data = config_default_1.DEFAULT_CONFIG) {
        this.config = data;
    }
    // Load full config from env (if using structured approach)
    loadFromEnv() {
        this.config = this.parseConfigFromEnv(process.env);
    }
    parseConfigFromEnv(env) {
        return {
            env: env.NODE_ENV || config_default_1.DEFAULT_CONFIG.env,
            db: this.parseDBConfig(env, config_default_1.DEFAULT_CONFIG.db),
            servicePorts: this.parseServicePorts(env, config_default_1.DEFAULT_CONFIG.servicePorts),
            logLevel: env.LOG_LEVEL || config_default_1.DEFAULT_CONFIG.logLevel,
            JWT_SECRET_KEY: env.JWT_SECRET_KEY || '',
            JWT_EXPIRY_TIME: Number(env.JWT_EXPIRY_TIME) || 3600,
            AUTH_KEY: env.AUTH_KEY || '',
        };
    }
    parseDBConfig(env, defaultConfig) {
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
    parseServicePorts(env, defaultConfig) {
        return {
            authentication: Number(env.AUTHENTICATION_PORT) || defaultConfig.authentication,
            client: Number(env.CLIENT_PORT) || defaultConfig.client,
        };
    }
    // Returns the full config object
    get configData() {
        return this.config;
    }
    // Alias for above
    get() {
        return this.config;
    }
    // ✅ NEW: Get a specific env variable safely
    getEnv(key) {
        return process.env[key];
    }
    // ✅ NEW: Get env variable OR throw error if it's missing (used for required secrets)
    getEnvOrThrow(key) {
        const value = process.env[key];
        if (!value) {
            throw new Error(`Missing required environment variable: ${key}`);
        }
        return value;
    }
};
exports.ConfigService = ConfigService;
exports.ConfigService = ConfigService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof config_interface_1.ConfigData !== "undefined" && config_interface_1.ConfigData) === "function" ? _a : Object])
], ConfigService);


/***/ }),
/* 4 */
/***/ ((module) => {

module.exports = require("tslib");

/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DEFAULT_CONFIG = void 0;
exports.DEFAULT_CONFIG = {
    env: 'production',
    db: {
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'intercert',
        database: 'audit',
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


/***/ }),
/* 7 */
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const app_controller_1 = __webpack_require__(9);
const app_service_1 = __webpack_require__(10);
const src_1 = __webpack_require__(11);
const typeorm_1 = __webpack_require__(14);
const config_module_1 = __webpack_require__(28);
const config_service_1 = __webpack_require__(3);
const authentication_module_1 = __webpack_require__(31);
const pdf_service_1 = __webpack_require__(44);
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            src_1.DBModule.forRoot(),
            config_module_1.ConfigModule,
            typeorm_1.TypeOrmModule.forFeature([config_service_1.ConfigService]),
            authentication_module_1.AuthenticationModule,
            pdf_service_1.PdfServiceModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);


/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const app_service_1 = __webpack_require__(10);
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getData() {
        return this.appService.getData();
    }
};
exports.AppController = AppController;
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], AppController.prototype, "getData", null);
exports.AppController = AppController = tslib_1.__decorate([
    (0, common_1.Controller)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object])
], AppController);


/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
let AppService = class AppService {
    getData() {
        return { message: 'Hello API' };
    }
};
exports.AppService = AppService;
exports.AppService = AppService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], AppService);


/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(4);
tslib_1.__exportStar(__webpack_require__(12), exports);
tslib_1.__exportStar(__webpack_require__(27), exports);
tslib_1.__exportStar(__webpack_require__(30), exports);
tslib_1.__exportStar(__webpack_require__(16), exports);


/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(4);
tslib_1.__exportStar(__webpack_require__(13), exports);
tslib_1.__exportStar(__webpack_require__(25), exports);
tslib_1.__exportStar(__webpack_require__(26), exports);


/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserRepositoryService = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(14);
const typeorm_2 = __webpack_require__(15);
const entities_1 = __webpack_require__(16);
const userConstants_1 = __webpack_require__(19);
const commonConstants_1 = __webpack_require__(22);
const bcryptUtil_1 = __webpack_require__(23);
let UserRepositoryService = class UserRepositoryService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async createSuperAdmin() {
        try {
            // Check if a super admin already exists
            // If it exists, throw an error to prevent duplicate super admins
            const existingUser = await this.userRepository.findOne({
                where: { email: 'anshumaan.tiwari@intercert.com' }
            });
            if (existingUser) {
                throw { message: "Super Admin already exists", statusCode: commonConstants_1.ERROR_CODES.BAD_REQUEST };
            }
            const hashedPassword = await (0, bcryptUtil_1.generatePasswordHash)('superadminpassword');
            const superAdmin = this.userRepository.create({
                name: 'Super Admin',
                email: 'anshumaan.tiwari@intercert.com',
                password: hashedPassword,
                role: userConstants_1.Role.SUPER_ADMIN,
            });
            return this.userRepository.save(superAdmin);
        }
        catch (error) {
            console.error("Error in createSuperAdmin: ", error);
            throw error;
        }
    }
    async findOneByEmail(email) {
        try {
            const user = await this.userRepository.findOne({
                where: { email },
            });
            if (!user) {
                throw { message: "Email not Match.", statusCode: commonConstants_1.ERROR_CODES.NOT_FOUND };
            }
            return user;
        }
        catch (error) {
            console.error("Error in findByEmail: ", error);
            throw error;
        }
    }
    async createUser(createUser, userdata) {
        try {
            const existingUser = await this.userRepository.findOne({
                where: { email: createUser.email }
            });
            if (existingUser) {
                throw { message: "This Email already exists", statusCode: commonConstants_1.ERROR_CODES.BAD_REQUEST };
            }
            const hashedPassword = await (0, bcryptUtil_1.generatePasswordHash)(createUser.password);
            const user = this.userRepository.create({
                name: createUser.name,
                email: createUser.email,
                password: hashedPassword,
                role: createUser.role,
                createdBy: userdata
            });
            console.log('New User to be created: ', user);
            return await this.userRepository.save(user);
        }
        catch (error) {
            console.log('Error creating user in repository:', error);
            throw error;
        }
    }
    async getAllUsers() {
        try {
            const users = await this.userRepository.find({
                relations: {
                    createdBy: true, // This will load the full createdBy user object
                },
                select: {
                    user_id: true,
                    name: true,
                    email: true,
                    role: true,
                    isActive: true,
                    created_at: true,
                    updated_at: true,
                    createdBy: {
                        user_id: true,
                        name: true,
                        email: true,
                        role: true
                    },
                },
                order: {
                    created_at: 'DESC'
                }
            });
            return users;
        }
        catch (error) {
            console.error("Error in getAllUsers: ", error);
            throw error;
        }
    }
};
exports.UserRepositoryService = UserRepositoryService;
exports.UserRepositoryService = UserRepositoryService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(entities_1.User)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], UserRepositoryService);


/***/ }),
/* 14 */
/***/ ((module) => {

module.exports = require("@nestjs/typeorm");

/***/ }),
/* 15 */
/***/ ((module) => {

module.exports = require("typeorm");

/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(4);
tslib_1.__exportStar(__webpack_require__(17), exports);
tslib_1.__exportStar(__webpack_require__(20), exports);
tslib_1.__exportStar(__webpack_require__(21), exports);


/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.User = void 0;
const tslib_1 = __webpack_require__(4);
const typeorm_1 = __webpack_require__(15);
__webpack_require__(18);
const userConstants_1 = __webpack_require__(19);
const session_entity_1 = __webpack_require__(20); // adjust path
const client_entity_1 = __webpack_require__(21); // adjust path
let User = class User {
};
exports.User = User;
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    tslib_1.__metadata("design:type", String)
], User.prototype, "user_id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "name", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "email", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "password", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: userConstants_1.Role,
    }),
    tslib_1.__metadata("design:type", typeof (_a = typeof userConstants_1.Role !== "undefined" && userConstants_1.Role) === "function" ? _a : Object)
], User.prototype, "role", void 0);
tslib_1.__decorate([
    (0, typeorm_1.ManyToOne)(() => User, user => user.children, { nullable: true, onDelete: 'CASCADE' }),
    tslib_1.__metadata("design:type", User)
], User.prototype, "createdBy", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToMany)(() => User, user => user.createdBy),
    tslib_1.__metadata("design:type", Array)
], User.prototype, "children", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToMany)(() => client_entity_1.Client, client => client.createdBy),
    tslib_1.__metadata("design:type", Array)
], User.prototype, "clients", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ default: true }),
    tslib_1.__metadata("design:type", Boolean)
], User.prototype, "isActive", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToMany)(() => session_entity_1.Session, session => session.user),
    tslib_1.__metadata("design:type", Array)
], User.prototype, "sessions", void 0);
tslib_1.__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    tslib_1.__metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], User.prototype, "created_at", void 0);
tslib_1.__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    tslib_1.__metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], User.prototype, "updated_at", void 0);
exports.User = User = tslib_1.__decorate([
    (0, typeorm_1.Entity)('user')
], User);


/***/ }),
/* 18 */
/***/ ((module) => {

module.exports = require("reflect-metadata");

/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OTP_REQUEST_LIMITS = exports.LOGIN_BY = exports.OTP_SEND_ON = exports.OTP_TYPE = exports.SESSION_STATUS = exports.USER_TYPE = exports.CLIENT_ROLES = exports.ADMIN_ROLES = exports.Role = exports.DEFAULT_USER_ROLES = exports.AUDIT_STATUS = exports.ACCOUNT_STATUS = void 0;
var ACCOUNT_STATUS;
(function (ACCOUNT_STATUS) {
    ACCOUNT_STATUS["ACTIVE"] = "ACTIVE";
    ACCOUNT_STATUS["INACTIVE"] = "INACTIVE";
    ACCOUNT_STATUS["BLOCKED"] = "BLOCKED";
    ACCOUNT_STATUS["DELETED"] = "DELETED";
})(ACCOUNT_STATUS || (exports.ACCOUNT_STATUS = ACCOUNT_STATUS = {}));
var AUDIT_STATUS;
(function (AUDIT_STATUS) {
    AUDIT_STATUS["TO_DO"] = "TO_DO";
    AUDIT_STATUS["IN_PROGRESS"] = "IN_PROGRESS";
    AUDIT_STATUS["REPORT_IN_REVIEW"] = "REPORT_IN_REVIEW";
    AUDIT_STATUS["CLOSED"] = "CLOSED";
})(AUDIT_STATUS || (exports.AUDIT_STATUS = AUDIT_STATUS = {}));
var DEFAULT_USER_ROLES;
(function (DEFAULT_USER_ROLES) {
    DEFAULT_USER_ROLES["SELLER"] = "SELLER";
    DEFAULT_USER_ROLES["USER"] = "USER";
    DEFAULT_USER_ROLES["MANAGER"] = "MANAGER";
    DEFAULT_USER_ROLES["ADMIN"] = "ADMINISTRATOR";
})(DEFAULT_USER_ROLES || (exports.DEFAULT_USER_ROLES = DEFAULT_USER_ROLES = {}));
var Role;
(function (Role) {
    Role["SUPER_ADMIN"] = "SUPER_ADMIN";
    Role["ADMIN"] = "ADMIN";
    Role["AUDITOR"] = "AUDITOR";
    Role["REVIEWER"] = "REVIEWER";
    Role["VERIFIER"] = "VERIFIER";
    Role["CLIENT"] = "CLIENT";
    Role["CLIENT_ADMIN"] = "CLIENT_ADMIN";
    Role["CLIENT_ANALYST"] = "CLIENT_ANALYST";
    Role["CLIENT_AUDITOR"] = "CLIENT_AUDITOR";
    Role["CLIENT_REVIEWER"] = "CLIENT_REVIEWER";
})(Role || (exports.Role = Role = {}));
var ADMIN_ROLES;
(function (ADMIN_ROLES) {
    ADMIN_ROLES["AUDITOR"] = "AUDITOR";
    ADMIN_ROLES["REVIEWER"] = "REVIEWER";
    ADMIN_ROLES["VERIFIER"] = "VERIFIER";
})(ADMIN_ROLES || (exports.ADMIN_ROLES = ADMIN_ROLES = {}));
var CLIENT_ROLES;
(function (CLIENT_ROLES) {
    CLIENT_ROLES["ADMIN"] = "ADMIN";
    CLIENT_ROLES["ANALYST"] = "ANALYST";
    CLIENT_ROLES["AUDITOR"] = "AUDITOR";
    CLIENT_ROLES["REVIEWER"] = "REVIEWER";
})(CLIENT_ROLES || (exports.CLIENT_ROLES = CLIENT_ROLES = {}));
var USER_TYPE;
(function (USER_TYPE) {
    USER_TYPE["ADMIN"] = "SUPER_ADMIN";
    USER_TYPE["USER"] = "ADMIN";
    USER_TYPE["HOTEL"] = "CLIENT";
})(USER_TYPE || (exports.USER_TYPE = USER_TYPE = {}));
var SESSION_STATUS;
(function (SESSION_STATUS) {
    SESSION_STATUS["LOGGED_IN"] = "LOGGED_IN";
    SESSION_STATUS["LOGGED_OUT"] = "LOGGED_OUT";
    SESSION_STATUS["BLOCKED"] = "BLOCKED";
})(SESSION_STATUS || (exports.SESSION_STATUS = SESSION_STATUS = {}));
var OTP_TYPE;
(function (OTP_TYPE) {
    OTP_TYPE["REGISTER_OTP"] = "REGISTER_OTP";
    OTP_TYPE["LOGIN_OTP"] = "LOGIN_OTP";
    OTP_TYPE["FORGOT_PASSWORD_OTP"] = "FORGOT_PASSWORD_OTP";
    OTP_TYPE["ADD_EMAIL"] = "ADD_EMAIL";
    OTP_TYPE["ADD_PHONE_NO"] = "ADD_PHONE_NO";
    OTP_TYPE["CUSTOM_LOGIN"] = "CUSTOM_LOGIN";
})(OTP_TYPE || (exports.OTP_TYPE = OTP_TYPE = {}));
var OTP_SEND_ON;
(function (OTP_SEND_ON) {
    OTP_SEND_ON["PHONE"] = "PHONE";
    OTP_SEND_ON["EMAIL"] = "EMAIL";
})(OTP_SEND_ON || (exports.OTP_SEND_ON = OTP_SEND_ON = {}));
var LOGIN_BY;
(function (LOGIN_BY) {
    LOGIN_BY["PHONE"] = "PHONE";
    LOGIN_BY["EMAIL"] = "EMAIL";
})(LOGIN_BY || (exports.LOGIN_BY = LOGIN_BY = {}));
var OTP_REQUEST_LIMITS;
(function (OTP_REQUEST_LIMITS) {
    OTP_REQUEST_LIMITS[OTP_REQUEST_LIMITS["RESEND_OTP"] = 200] = "RESEND_OTP";
})(OTP_REQUEST_LIMITS || (exports.OTP_REQUEST_LIMITS = OTP_REQUEST_LIMITS = {}));


/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Session = void 0;
const tslib_1 = __webpack_require__(4);
const typeorm_1 = __webpack_require__(15);
const user_entity_1 = __webpack_require__(17); // adjust path
let Session = class Session {
};
exports.Session = Session;
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    tslib_1.__metadata("design:type", String)
], Session.prototype, "sessionId", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Session.prototype, "userId", void 0);
tslib_1.__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, user => user.sessions, { onDelete: 'CASCADE' }),
    tslib_1.__metadata("design:type", typeof (_a = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _a : Object)
], Session.prototype, "user", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Session.prototype, "userEmail", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    tslib_1.__metadata("design:type", String)
], Session.prototype, "token", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'simple-json', nullable: true }),
    tslib_1.__metadata("design:type", Object)
], Session.prototype, "googleCallbackData", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp' }),
    tslib_1.__metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Session.prototype, "expiresAt", void 0);
tslib_1.__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    tslib_1.__metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], Session.prototype, "createdAt", void 0);
exports.Session = Session = tslib_1.__decorate([
    (0, typeorm_1.Entity)('session')
], Session);


/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Client = void 0;
const tslib_1 = __webpack_require__(4);
const typeorm_1 = __webpack_require__(15);
const user_entity_1 = __webpack_require__(17);
const userConstants_1 = __webpack_require__(19);
let Client = class Client {
};
exports.Client = Client;
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    tslib_1.__metadata("design:type", String)
], Client.prototype, "clientId", void 0);
tslib_1.__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, user => user.clients, {
        nullable: false,
        onDelete: 'CASCADE'
    }),
    tslib_1.__metadata("design:type", typeof (_a = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _a : Object)
], Client.prototype, "createdBy", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Client.prototype, "legal_entity_name", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Client.prototype, "trading_name", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Client.prototype, "county_name", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Client.prototype, "state_name", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Client.prototype, "city_name", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Client.prototype, "street_name", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Client.prototype, "zip_name", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Client.prototype, "nature_of_business", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Client.prototype, "website_domain_url", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Client.prototype, "type_of_business", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Client.prototype, "contact_name", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Client.prototype, "designation", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Client.prototype, "contact_email", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Client.prototype, "phone", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    tslib_1.__metadata("design:type", String)
], Client.prototype, "technical_contacts", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    tslib_1.__metadata("design:type", String)
], Client.prototype, "information_security_officer", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    tslib_1.__metadata("design:type", String)
], Client.prototype, "client_signoff_authority", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Client.prototype, "assessment_project_name", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Client.prototype, "assessment_type", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Client.prototype, "assessment_category", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Client.prototype, "assessment_year", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Client.prototype, "pci_dss_version_application", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Client.prototype, "assessment_period_covered", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    tslib_1.__metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Client.prototype, "audit_start_date", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    tslib_1.__metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], Client.prototype, "audit_end_date", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    tslib_1.__metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], Client.prototype, "date_of_report_submission", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: userConstants_1.AUDIT_STATUS,
    }),
    tslib_1.__metadata("design:type", typeof (_e = typeof userConstants_1.AUDIT_STATUS !== "undefined" && userConstants_1.AUDIT_STATUS) === "function" ? _e : Object)
], Client.prototype, "audit_status", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    tslib_1.__metadata("design:type", typeof (_f = typeof Date !== "undefined" && Date) === "function" ? _f : Object)
], Client.prototype, "certificate_issue_date", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    tslib_1.__metadata("design:type", typeof (_g = typeof Date !== "undefined" && Date) === "function" ? _g : Object)
], Client.prototype, "certificate_expiry_date", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Client.prototype, "certificate_number_unique_id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    tslib_1.__metadata("design:type", typeof (_h = typeof Date !== "undefined" && Date) === "function" ? _h : Object)
], Client.prototype, "next_audit_due_date", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Client.prototype, "name_of_qsa", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Client.prototype, "qsa_license_certificate_number", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Client.prototype, "audit_manager_reviewer_name", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    tslib_1.__metadata("design:type", String)
], Client.prototype, "scope_of_assessment", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    tslib_1.__metadata("design:type", String)
], Client.prototype, "location_of_scope", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Client.prototype, "overall_compliance_status", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Client.prototype, "compensating_controls_used", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Client.prototype, "customized_approach_used", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Client.prototype, "non_conformities_gap", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Client.prototype, "non_conformities_gap_identified", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    tslib_1.__metadata("design:type", typeof (_j = typeof Date !== "undefined" && Date) === "function" ? _j : Object)
], Client.prototype, "remediation_target_date", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    tslib_1.__metadata("design:type", typeof (_k = typeof Date !== "undefined" && Date) === "function" ? _k : Object)
], Client.prototype, "revalidation_date", void 0);
tslib_1.__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    tslib_1.__metadata("design:type", typeof (_l = typeof Date !== "undefined" && Date) === "function" ? _l : Object)
], Client.prototype, "created_at", void 0);
tslib_1.__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    tslib_1.__metadata("design:type", typeof (_m = typeof Date !== "undefined" && Date) === "function" ? _m : Object)
], Client.prototype, "updated_at", void 0);
exports.Client = Client = tslib_1.__decorate([
    (0, typeorm_1.Entity)('client')
], Client);


/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LOGO_WHITTEBG = exports.LOGO = exports.FILE_SIZE_IN_BYTES = exports.DEVICE_TYPE = exports.PLATFORM = exports.TOKEN_TYPE = exports.S3_FOLDER = exports.ExpressRequestParams = exports.ErrorMessages = exports.ERROR_CODES = void 0;
var ERROR_CODES;
(function (ERROR_CODES) {
    ERROR_CODES[ERROR_CODES["UNEXPECTED_ERROR"] = 501] = "UNEXPECTED_ERROR";
    ERROR_CODES[ERROR_CODES["OUTGOING_API_ERROR"] = 777] = "OUTGOING_API_ERROR";
    ERROR_CODES[ERROR_CODES["ERROR_UNKNOWN_SHOW_TO_USER"] = 408] = "ERROR_UNKNOWN_SHOW_TO_USER";
    ERROR_CODES[ERROR_CODES["DUPLICATE_RESOURCE"] = 409] = "DUPLICATE_RESOURCE";
    ERROR_CODES[ERROR_CODES["ERROR_CANNOT_FULLFILL_REQUEST"] = 417] = "ERROR_CANNOT_FULLFILL_REQUEST";
    ERROR_CODES[ERROR_CODES["DATABASE_ERROR"] = 461] = "DATABASE_ERROR";
    ERROR_CODES[ERROR_CODES["DATABASE_DUPLICATE_ERROR_CODE"] = 465] = "DATABASE_DUPLICATE_ERROR_CODE";
    ERROR_CODES[ERROR_CODES["ACCESS_DENIED"] = 403] = "ACCESS_DENIED";
    ERROR_CODES[ERROR_CODES["INVALID_ROUTE_URL"] = 608] = "INVALID_ROUTE_URL";
    ERROR_CODES[ERROR_CODES["INVALID_BASE_URL"] = 609] = "INVALID_BASE_URL";
    ERROR_CODES[ERROR_CODES["JWT_TOKEN_INVALID"] = 498] = "JWT_TOKEN_INVALID";
    ERROR_CODES[ERROR_CODES["JWT_TOKEN_EXPIRED"] = 463] = "JWT_TOKEN_EXPIRED";
    ERROR_CODES[ERROR_CODES["NOT_AUTHORIZED"] = 401] = "NOT_AUTHORIZED";
    ERROR_CODES[ERROR_CODES["NOT_FOUND"] = 404] = "NOT_FOUND";
    ERROR_CODES[ERROR_CODES["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    ERROR_CODES[ERROR_CODES["UNSUPPORTED_MEDIA_TYPE"] = 415] = "UNSUPPORTED_MEDIA_TYPE";
    ERROR_CODES[ERROR_CODES["UNVERIFIED_ACCOUNT"] = 466] = "UNVERIFIED_ACCOUNT";
    ERROR_CODES[ERROR_CODES["BLOCKED_USER"] = 468] = "BLOCKED_USER";
    ERROR_CODES[ERROR_CODES["TEST_DRIVE_TAKEN"] = 470] = "TEST_DRIVE_TAKEN";
})(ERROR_CODES || (exports.ERROR_CODES = ERROR_CODES = {}));
var ErrorMessages;
(function (ErrorMessages) {
    ErrorMessages["UNEXPECTED_ERROR"] = "Unexpected Error";
    ErrorMessages["SOMETHING_WENT_WRONG"] = "Something Went Wrong";
    ErrorMessages["JWT_TOKEN_INVALID"] = "Invalid Token";
    ErrorMessages["JWT_TOKEN_EXPIRED"] = "Session Expired";
    ErrorMessages["NOT_AUTHORIZED"] = "NOT_AUTHORIZED";
    ErrorMessages["ACCESS_DENIED"] = "ACCESS_DENIED";
})(ErrorMessages || (exports.ErrorMessages = ErrorMessages = {}));
exports.ExpressRequestParams = {
    IP_ADDRESS: "ip_address",
    AUTH_PAYLOAD: "auth_payload"
};
exports.S3_FOLDER = {
    PROFILE: 'profile',
    products: 'products'
};
var TOKEN_TYPE;
(function (TOKEN_TYPE) {
    TOKEN_TYPE["GUEST_LOGIN"] = "GUEST_LOGIN";
    TOKEN_TYPE["USER_LOGIN"] = "USER_LOGIN";
})(TOKEN_TYPE || (exports.TOKEN_TYPE = TOKEN_TYPE = {}));
var PLATFORM;
(function (PLATFORM) {
    PLATFORM["WEB"] = "WEB";
    PLATFORM["ANDROID"] = "ANDROID";
    PLATFORM["IOS"] = "IOS";
})(PLATFORM || (exports.PLATFORM = PLATFORM = {}));
var DEVICE_TYPE;
(function (DEVICE_TYPE) {
    DEVICE_TYPE["WEB"] = "WEB";
    DEVICE_TYPE["ANDROID"] = "ANDROID";
    DEVICE_TYPE["IOS"] = "IOS";
})(DEVICE_TYPE || (exports.DEVICE_TYPE = DEVICE_TYPE = {}));
exports.FILE_SIZE_IN_BYTES = 50 * 1024 * 1024; //50mb
exports.LOGO = "https://www.page1travels.com/uploads/1673871307.png";
exports.LOGO_WHITTEBG = "";


/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.checkPasswordHash = exports.generatePasswordHash = void 0;
const tslib_1 = __webpack_require__(4);
const bcrypt = tslib_1.__importStar(__webpack_require__(24));
const generatePasswordHash = async (password) => {
    // eslint-disable-next-line no-useless-catch
    try {
        const salt = await bcrypt.genSalt(12);
        return await bcrypt.hash(password, salt);
    }
    catch (err) {
        throw err;
    }
};
exports.generatePasswordHash = generatePasswordHash;
const checkPasswordHash = async (password, hash) => {
    try {
        return await bcrypt.compare(password, hash);
    }
    catch (err) {
        console.log(" becrypt error check password error", err);
        return false;
    }
};
exports.checkPasswordHash = checkPasswordHash;


/***/ }),
/* 24 */
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),
/* 25 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SessionRepositoryService = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(14);
const typeorm_2 = __webpack_require__(15);
const entities_1 = __webpack_require__(16);
let SessionRepositoryService = class SessionRepositoryService {
    constructor(sessionRepository) {
        this.sessionRepository = sessionRepository;
    }
    async createOrUpdateSession(userId, email, token, user, expiresAt) {
        try {
            // Try to find an existing session by unique key (e.g., email)
            let session = await this.sessionRepository.findOne({
                where: { userEmail: email },
            });
            if (session) {
                // Update existing session
                session.token = token;
                session.googleCallbackData = user;
                session.expiresAt = expiresAt;
            }
            else {
                // Create a new session
                session = this.sessionRepository.create({
                    userId,
                    userEmail: email,
                    token,
                    googleCallbackData: user,
                    expiresAt,
                });
            }
            // Using save will insert or update accordingly
            return await this.sessionRepository.save(session);
        }
        catch (error) {
            console.error("Error in Session: ", error);
            throw error;
        }
    }
    async findSessionByUserId(userId) {
        try {
            const session = await this.sessionRepository.findOne({
                where: { userId },
            });
            return session;
        }
        catch (error) {
            console.error("Error in findSessionByUserId: ", error);
            throw error;
        }
    }
    async deleteSession(userId) {
        try {
            await this.sessionRepository.delete({ userId });
        }
        catch (error) {
            console.error("Error in deleteSession: ", error);
            throw error;
        }
    }
};
exports.SessionRepositoryService = SessionRepositoryService;
exports.SessionRepositoryService = SessionRepositoryService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(entities_1.Session)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], SessionRepositoryService);


/***/ }),
/* 26 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ClientRepositoryService = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(14);
const typeorm_2 = __webpack_require__(15);
const entities_1 = __webpack_require__(16);
let ClientRepositoryService = class ClientRepositoryService {
    constructor(clientRepository) {
        this.clientRepository = clientRepository;
    }
    async createClient(createClient, userdata) {
        try {
            const newClient = this.clientRepository.create({
                legal_entity_name: createClient.legal_entity_name,
                trading_name: createClient.trading_name,
                county_name: createClient.county_name,
                state_name: createClient.state_name,
                city_name: createClient.city_name,
                street_name: createClient.street_name,
                zip_name: createClient.zip_name,
                nature_of_business: createClient.nature_of_business,
                website_domain_url: createClient.website_domain_url,
                type_of_business: createClient.type_of_business,
                contact_name: createClient.contact_name,
                designation: createClient.designation,
                contact_email: createClient.contact_email,
                phone: createClient.phone,
                technical_contacts: createClient.technical_contacts,
                information_security_officer: createClient.information_security_officer,
                client_signoff_authority: createClient.client_signoff_authority,
                assessment_project_name: createClient.assessment_project_name,
                assessment_type: createClient.assessment_type,
                assessment_category: createClient.assessment_category,
                assessment_year: createClient.assessment_year,
                pci_dss_version_application: createClient.pci_dss_version_application,
                assessment_period_covered: createClient.assessment_period_covered,
                audit_start_date: createClient.audit_start_date,
                audit_end_date: createClient.audit_end_date,
                date_of_report_submission: createClient.date_of_report_submission,
                audit_status: createClient.audit_status,
                certificate_issue_date: createClient.certificate_issue_date,
                certificate_expiry_date: createClient.certificate_expiry_date,
                certificate_number_unique_id: createClient.certificate_number_unique_id,
                next_audit_due_date: createClient.next_audit_due_date,
                name_of_qsa: createClient.name_of_qsa,
                qsa_license_certificate_number: createClient.qsa_license_certificate_number,
                audit_manager_reviewer_name: createClient.audit_manager_reviewer_name,
                scope_of_assessment: createClient.scope_of_assessment,
                location_of_scope: createClient.location_of_scope,
                overall_compliance_status: createClient.overall_compliance_status,
                compensating_controls_used: createClient.compensating_controls_used,
                customized_approach_used: createClient.customized_approach_used,
                non_conformities_gap: createClient.non_conformities_gap,
                non_conformities_gap_identified: createClient.non_conformities_gap_identified,
                remediation_target_date: createClient.remediation_target_date,
                revalidation_date: createClient.revalidation_date,
                createdBy: userdata.user_id,
            });
            return await this.clientRepository.save(newClient);
        }
        catch (error) {
            console.error("Error in createClient: ", error);
            throw error;
        }
    }
    async getAllClients() {
        try {
            return await this.clientRepository.find();
        }
        catch (error) {
            console.error("Error in getAllClients: ", error);
            throw error;
        }
    }
};
exports.ClientRepositoryService = ClientRepositoryService;
exports.ClientRepositoryService = ClientRepositoryService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(entities_1.Client)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], ClientRepositoryService);


/***/ }),
/* 27 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var DBModule_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DBModule = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const config_service_1 = __webpack_require__(3);
const config_module_1 = __webpack_require__(28);
const typeorm_1 = __webpack_require__(14);
const user_entity_1 = __webpack_require__(17);
const client_entity_1 = __webpack_require__(21);
const session_entity_1 = __webpack_require__(20);
const user_repository_1 = __webpack_require__(13);
const session_repository_1 = __webpack_require__(25);
const client_repository_1 = __webpack_require__(26);
const utils_1 = __webpack_require__(29);
const typeorm_2 = __webpack_require__(15);
let DBModule = DBModule_1 = class DBModule {
    static getConnectionOptions(config) {
        const dbData = config.get().db;
        if (!dbData) {
            throw new Error('Database configuration not found');
        }
        const connectionOptions = this.getConnectionOptionsMySQL(dbData);
        return {
            ...connectionOptions,
            entities: [user_entity_1.User, session_entity_1.Session, client_entity_1.Client],
            synchronize: true, // Set to false in production
            logging: false,
            migrationsRun: false,
        };
    }
    static getConnectionOptionsMySQL(dbData) {
        const { database, host, logging, password, port, synchronize, username, } = dbData;
        return {
            type: 'mysql',
            host,
            port,
            username,
            password,
            database,
            logging,
            synchronize,
            entities: [user_entity_1.User, session_entity_1.Session, client_entity_1.Client], // Alternatively let TypeORM auto-load entities
        };
    }
    static forRoot() {
        return {
            module: DBModule_1,
            imports: [
                typeorm_1.TypeOrmModule.forRootAsync({
                    imports: [config_module_1.ConfigModule],
                    useFactory: (configService) => {
                        return DBModule_1.getConnectionOptions(configService);
                    },
                    inject: [config_service_1.ConfigService],
                }),
                typeorm_1.TypeOrmModule.forFeature([user_entity_1.User, session_entity_1.Session, client_entity_1.Client]),
            ],
            controllers: [],
            providers: [
                user_repository_1.UserRepositoryService, session_repository_1.SessionRepositoryService, client_repository_1.ClientRepositoryService,
                {
                    provide: utils_1.TransactionManager,
                    useFactory: (dataSource) => new utils_1.TransactionManager(dataSource),
                    inject: [typeorm_2.DataSource],
                },
            ],
            exports: [user_repository_1.UserRepositoryService, session_repository_1.SessionRepositoryService, client_repository_1.ClientRepositoryService],
        };
    }
};
exports.DBModule = DBModule;
exports.DBModule = DBModule = DBModule_1 = tslib_1.__decorate([
    (0, common_1.Module)({})
], DBModule);


/***/ }),
/* 28 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConfigModule = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const config_service_1 = __webpack_require__(3);
const configFactory = {
    provide: config_service_1.ConfigService,
    useFactory: () => {
        const config = new config_service_1.ConfigService();
        config.loadFromEnv();
        return config;
    },
};
let ConfigModule = class ConfigModule {
};
exports.ConfigModule = ConfigModule;
exports.ConfigModule = ConfigModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [],
        providers: [configFactory],
        exports: [configFactory],
    })
], ConfigModule);


/***/ }),
/* 29 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TransactionManager = void 0;
class TransactionManager {
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
    async startTransaction() {
        this.queryRunner = this.dataSource.createQueryRunner();
        await this.queryRunner.connect();
        await this.queryRunner.startTransaction();
    }
    async commit() {
        await this.queryRunner.commitTransaction();
    }
    async rollback() {
        await this.queryRunner.rollbackTransaction();
    }
    async release() {
        await this.queryRunner.release();
    }
    get manager() {
        return this.queryRunner.manager;
    }
    async runInTransaction(callback) {
        try {
            await this.startTransaction();
            const result = await callback(this.manager);
            await this.commit();
            return result;
        }
        catch (error) {
            await this.rollback();
            throw error;
        }
        finally {
            await this.release();
        }
    }
}
exports.TransactionManager = TransactionManager;


/***/ }),
/* 30 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DatabaseService = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
let DatabaseService = class DatabaseService {
};
exports.DatabaseService = DatabaseService;
exports.DatabaseService = DatabaseService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], DatabaseService);


/***/ }),
/* 31 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthenticationModule = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const authentication_controller_1 = __webpack_require__(32);
const authentication_service_1 = __webpack_require__(33);
const src_1 = __webpack_require__(11);
const typeorm_1 = __webpack_require__(14);
const google_strategy_1 = __webpack_require__(50);
const config_module_1 = __webpack_require__(28);
const config_service_1 = __webpack_require__(3);
const response_handler_module_1 = __webpack_require__(52);
const passport_1 = __webpack_require__(42);
const jwt_auth_guard_1 = __webpack_require__(41);
const jwt_service_1 = __webpack_require__(39);
const user_entity_1 = __webpack_require__(17);
const pdf_service_module_1 = __webpack_require__(49);
let AuthenticationModule = class AuthenticationModule {
};
exports.AuthenticationModule = AuthenticationModule;
exports.AuthenticationModule = AuthenticationModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            passport_1.PassportModule.register({ session: false }),
            src_1.DBModule.forRoot(),
            config_module_1.ConfigModule,
            response_handler_module_1.ResponseHandlerModule,
            pdf_service_module_1.PdfServiceModule,
            typeorm_1.TypeOrmModule.forFeature([config_service_1.ConfigService, user_entity_1.User]),
        ],
        controllers: [authentication_controller_1.AuthenticationController],
        providers: [authentication_service_1.AuthenticationService, google_strategy_1.GoogleStrategy, jwt_service_1.JwtService, jwt_auth_guard_1.JwtAuthGuard],
        exports: [jwt_auth_guard_1.JwtAuthGuard],
    })
], AuthenticationModule);


/***/ }),
/* 32 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthenticationController = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const authentication_service_1 = __webpack_require__(33);
const response_handler_service_1 = __webpack_require__(34);
const user_dto_1 = __webpack_require__(35);
const create_client_dto_1 = __webpack_require__(38);
const user_repository_1 = __webpack_require__(13);
const session_repository_1 = __webpack_require__(25);
const jwt_service_1 = __webpack_require__(39);
const jwt_auth_guard_1 = __webpack_require__(41);
const passport_1 = __webpack_require__(42);
const express_1 = __webpack_require__(43);
const common_2 = __webpack_require__(1);
const pdf_service_1 = __webpack_require__(44);
let AuthenticationController = class AuthenticationController {
    constructor(authenticationService, responseHandlerService, userRepository, jwtService, sessionRepository, pdfService) {
        this.authenticationService = authenticationService;
        this.responseHandlerService = responseHandlerService;
        this.userRepository = userRepository;
        this.jwtService = jwtService;
        this.sessionRepository = sessionRepository;
        this.pdfService = pdfService;
    }
    getStatus() {
        return { message: 'Authentication service is running' };
    }
    async registerSuperAdmin(res, req) {
        try {
            const response = await this.authenticationService.registerSuperAdmin();
            return this.responseHandlerService.sendSuccessResponse(res, response);
        }
        catch (error) {
            console.log('Error in registerSuperAdmin: ', error);
            return this.responseHandlerService.sendErrorResponse(res, error);
        }
    }
    async createUser(createUser, req, res) {
        try {
            const userdata = req.user; // ✅ now available
            console.log("Authenticated User: ", userdata);
            if (userdata.role !== 'SUPER_ADMIN') {
                throw new common_2.ForbiddenException('Access denied. Only SUPER_ADMIN can create users.');
            }
            const response = await this.authenticationService.createUser(createUser, userdata);
            return this.responseHandlerService.sendSuccessResponse(res, response);
        }
        catch (error) {
            console.log('Error in createUser: ', error);
            return this.responseHandlerService.sendErrorResponse(res, error);
        }
    }
    async getUserList(req, res) {
        try {
            const userdata = req.user; // ✅ now available
            console.log("Authenticated User: ", userdata);
            if (userdata.role !== 'SUPER_ADMIN') {
                throw new common_2.ForbiddenException('Access denied. Only SUPER_ADMIN can view user list.');
            }
            const users = await this.authenticationService.getUsers();
            return this.responseHandlerService.sendSuccessResponse(res, { message: "User list fetched successfully", data: users });
        }
        catch (error) {
            console.log('Error in getUserList: ', error);
            return this.responseHandlerService.sendErrorResponse(res, error);
        }
    }
    async createClient(createClient, req, res) {
        try {
            const userdata = req.user; // ✅ now available
            console.log("Authenticated User: ", userdata);
            console.log("createClient Data: ", createClient);
            const response = await this.authenticationService.createClient(createClient, userdata);
            return this.responseHandlerService.sendSuccessResponse(res, response);
        }
        catch (error) {
            console.log('Error in createClient: ', error);
            return this.responseHandlerService.sendErrorResponse(res, error);
        }
    }
    async getClientList(req, res) {
        try {
            const userdata = req.user; // ✅ now available
            console.log("Authenticated User: ", userdata);
            const clients = await this.authenticationService.getClient();
            return this.responseHandlerService.sendSuccessResponse(res, { message: "Client list fetched successfully", data: clients });
        }
        catch (error) {
            console.log('Error in getClientList: ', error);
            return this.responseHandlerService.sendErrorResponse(res, error);
        }
    }
    async loginSuperAdmin(loginDto, req, res) {
        try {
            const response = await this.authenticationService.loginSuperAdmin(loginDto);
            return this.responseHandlerService.sendSuccessResponse(res, response);
        }
        catch (error) {
            console.log('Error in loginSuperAdmin: ', error);
            return this.responseHandlerService.sendErrorResponse(res, error);
        }
    }
    // === GOOGLE AUTH ROUTES ===
    async googleAuth() {
        console.log(">>>>>>>>>>>>>>>>>>>>>run test");
        // Initiates Google OAuth2 login
    }
    async googleAuthRedirect(req, res) {
        try {
            const user = req.user;
            console.log('Google user info:', user);
            // 1️⃣ Check email domain
            if (!user.email || !user.email.endsWith('@intercert.com')) {
                return res.redirect(`${process.env.FRONTEND_URL}/login?error=unauthorized_email`);
            }
            // 2️⃣ Check if user exists in DB
            const existingUser = await this.userRepository.findOneByEmail(user.email);
            if (!existingUser) {
                return res.redirect(`${process.env.FRONTEND_URL}/login?error=user_not_registered`);
            }
            // 3️⃣ Generate JWT for your app
            const payload = {
                userId: existingUser.user_id,
                email: existingUser.email,
                role: existingUser.role,
            };
            const jwtToken = await this.jwtService.generateJWTToken(payload);
            console.log("jwtToken   >>>>>>>  jwtToken", jwtToken);
            // 4️⃣ Optionally, save session in DB
            await this.sessionRepository.createOrUpdateSession(existingUser.user_id, existingUser.email, jwtToken, user, new Date(Date.now() + 60 * 60 * 1000));
            // 5️⃣ Redirect to frontend with JWT as query param or cookie
            return res.redirect(`${process.env.FRONTEND_URL}/dashboard?token=${jwtToken}`);
            // Set httpOnly cookie
            // res.cookie('jwt', jwtToken, {
            //   httpOnly: false,
            //   secure: true,
            //   maxAge: 60 * 60 * 1000,              // 1 hour in milliseconds
            //   sameSite: "none",                     // adjust as needed
            //   path: '/',
            // });
            // Redirect to frontend dashboard
            // return res.redirect(`${process.env.FRONTEND_URL}/dashboard`);
        }
        catch (err) {
            console.error('Google login error:', err);
            return res.redirect(`${process.env.FRONTEND_URL}/login?error=login_failed`);
        }
    }
    //   @Get('google/callback')
    // @UseGuards(AuthGuard('google'))
    // async googleAuthRedirect(@Req() req, @Res() res: Response) {
    //   try {
    //     const user = req.user;
    //     console.log('Google user info:', user);
    //     // 1️⃣ Check email domain
    //     if (!user.email || !user.email.endsWith('@intercert.com')) {
    //       return res.redirect(`${process.env.FRONTEND_URL}/login?error=unauthorized_email`);
    //     }
    //     // 2️⃣ Check if user exists in DB
    //     const existingUser = await this.userRepository.findOneByEmail(user.email);
    //     if (!existingUser) {
    //       return res.redirect(`${process.env.FRONTEND_URL}/login?error=user_not_registered`);
    //     }
    //     // 3️⃣ Generate JWT for your app
    //     const payload = {
    //       userId: existingUser.user_id,
    //       email: existingUser.email,
    //       role: existingUser.role,
    //     };
    //     const jwtToken = await this.jwtService.generateJWTToken(payload);
    //     console.log("jwtToken   >>>>>>>  jwtToken", jwtToken);
    //     // 4️⃣ Optionally, save session in DB
    //     await this.sessionRepository.createOrUpdateSession(
    //       existingUser.user_id,
    //       existingUser.email,
    //       jwtToken,
    //       user,
    //       new Date(Date.now() + 60 * 60 * 1000),
    //     );
    //     // 5️⃣ Redirect to frontend with JWT as query parameter
    //     return res.redirect(`${process.env.FRONTEND_URL}/dashboard?token=${jwtToken}`);
    //   } catch (err) {
    //     console.error('Google login error:', err);
    //     return res.redirect(`${process.env.FRONTEND_URL}/login?error=login_failed`);
    //   }
    // }
    // Generate certificate using existing PDF template
    async generateCertificateFromTemplate(certificateData, res) {
        try {
            console.log('Received certificate data:', certificateData);
            const pdfBuffer = await this.pdfService.modifyExistingCertificate(certificateData);
            res.set({
                'Content-Type': 'application/pdf',
                'Content-Disposition': `attachment; filename=certificate-${certificateData.certificateNumber || 'document'}.pdf`,
                'Content-Length': pdfBuffer.length.toString(),
            });
            res.send(pdfBuffer);
        }
        catch (error) {
            return this.responseHandlerService.sendErrorResponse(res, error);
        }
    }
};
exports.AuthenticationController = AuthenticationController;
tslib_1.__decorate([
    (0, common_1.Get)('status'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], AuthenticationController.prototype, "getStatus", null);
tslib_1.__decorate([
    (0, common_1.Get)('register-super-admin'),
    tslib_1.__param(0, (0, common_1.Res)()),
    tslib_1.__param(1, (0, common_1.Req)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthenticationController.prototype, "registerSuperAdmin", null);
tslib_1.__decorate([
    (0, common_1.Post)('create-user'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__param(1, (0, common_1.Req)()),
    tslib_1.__param(2, (0, common_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_g = typeof user_dto_1.CreateUserDto !== "undefined" && user_dto_1.CreateUserDto) === "function" ? _g : Object, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthenticationController.prototype, "createUser", null);
tslib_1.__decorate([
    (0, common_1.Get)('user-list'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    tslib_1.__param(0, (0, common_1.Req)()),
    tslib_1.__param(1, (0, common_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, typeof (_h = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _h : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthenticationController.prototype, "getUserList", null);
tslib_1.__decorate([
    (0, common_1.Post)('create-client'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__param(1, (0, common_1.Req)()),
    tslib_1.__param(2, (0, common_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_j = typeof create_client_dto_1.CreateClientDto !== "undefined" && create_client_dto_1.CreateClientDto) === "function" ? _j : Object, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthenticationController.prototype, "createClient", null);
tslib_1.__decorate([
    (0, common_1.Get)('client-list'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    tslib_1.__param(0, (0, common_1.Req)()),
    tslib_1.__param(1, (0, common_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthenticationController.prototype, "getClientList", null);
tslib_1.__decorate([
    (0, common_1.Post)('login'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__param(1, (0, common_1.Req)()),
    tslib_1.__param(2, (0, common_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_k = typeof user_dto_1.AdminLoginDto !== "undefined" && user_dto_1.AdminLoginDto) === "function" ? _k : Object, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthenticationController.prototype, "loginSuperAdmin", null);
tslib_1.__decorate([
    (0, common_1.Get)('google'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('google')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], AuthenticationController.prototype, "googleAuth", null);
tslib_1.__decorate([
    (0, common_1.Get)('google/callback'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('google')),
    tslib_1.__param(0, (0, common_1.Req)()),
    tslib_1.__param(1, (0, common_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, typeof (_l = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _l : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthenticationController.prototype, "googleAuthRedirect", null);
tslib_1.__decorate([
    (0, common_1.Post)('generate-certificate-from-template'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__param(1, (0, common_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_m = typeof pdf_service_1.CertificateData !== "undefined" && pdf_service_1.CertificateData) === "function" ? _m : Object, typeof (_o = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _o : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthenticationController.prototype, "generateCertificateFromTemplate", null);
exports.AuthenticationController = AuthenticationController = tslib_1.__decorate([
    (0, common_1.Controller)('auth'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof authentication_service_1.AuthenticationService !== "undefined" && authentication_service_1.AuthenticationService) === "function" ? _a : Object, typeof (_b = typeof response_handler_service_1.ResponseHandlerService !== "undefined" && response_handler_service_1.ResponseHandlerService) === "function" ? _b : Object, typeof (_c = typeof user_repository_1.UserRepositoryService !== "undefined" && user_repository_1.UserRepositoryService) === "function" ? _c : Object, typeof (_d = typeof jwt_service_1.JwtService !== "undefined" && jwt_service_1.JwtService) === "function" ? _d : Object, typeof (_e = typeof session_repository_1.SessionRepositoryService !== "undefined" && session_repository_1.SessionRepositoryService) === "function" ? _e : Object, typeof (_f = typeof pdf_service_1.PdfServiceService !== "undefined" && pdf_service_1.PdfServiceService) === "function" ? _f : Object])
], AuthenticationController);


/***/ }),
/* 33 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthenticationService = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const userConstants_1 = __webpack_require__(19);
const src_1 = __webpack_require__(11);
const src_2 = __webpack_require__(11);
const commonConstants_1 = __webpack_require__(22);
const bcryptUtil_1 = __webpack_require__(23);
let AuthenticationService = class AuthenticationService {
    constructor(userRepositoryService, clientRepositoryService) {
        this.userRepositoryService = userRepositoryService;
        this.clientRepositoryService = clientRepositoryService;
    }
    async registerSuperAdmin() {
        try {
            const superAdmin = await this.userRepositoryService.createSuperAdmin();
            return { message: "Super Admin registered successfully", data: superAdmin };
        }
        catch (error) {
            console.log("Error in registerSuperAdmin Service: ", error);
            throw error;
        }
    }
    // Method to handle super admin login
    async loginSuperAdmin(loginDto) {
        try {
            // Logic for super admin login
            const { email, password } = loginDto;
            const user = await this.userRepositoryService.findOneByEmail(email);
            if (user.role !== userConstants_1.Role.SUPER_ADMIN) {
                throw { message: "Role not Match Access denied..", statusCode: commonConstants_1.ERROR_CODES.NOT_FOUND };
            }
            // Validate password using bcrypt
            const isPasswordValid = await (0, bcryptUtil_1.checkPasswordHash)(password, user.password);
            // Validate password (this is just a placeholder, implement your actual password validation logic)
            if (!isPasswordValid) {
                throw { message: "Invalid password", statusCode: commonConstants_1.ERROR_CODES.NOT_AUTHORIZED };
            }
            // If login is successful, return user data or token
            return { message: 'Super Admin logged in successfully', data: user };
        }
        catch (error) {
            console.log("Error in loginSuperAdmin Service: ", error);
            throw error;
        }
    }
    async createUser(createUser, userdata) {
        try {
            const user = await this.userRepositoryService.createUser(createUser, userdata);
            return { message: "User registered successfully", data: user };
        }
        catch (error) {
            console.log("Error in registerSuperAdmin Service: ", error);
            throw error; // ✅ throwing so controller can catch it
        }
    }
    async getUsers() {
        try {
            const users = await this.userRepositoryService.getAllUsers();
            return users;
        }
        catch (error) {
            console.log("Error in getAllUsers Service: ", error);
            throw error; // ✅ throwing so controller can catch it
        }
    }
    async createClient(createClient, userdata) {
        try {
            const client = await this.clientRepositoryService.createClient(createClient, userdata);
            return { message: "Client created successfully", data: client };
        }
        catch (error) {
            console.log("Error in createClient Service: ", error);
            throw error; // ✅ throwing so controller can catch it
        }
    }
    async getClient() {
        try {
            const clients = await this.clientRepositoryService.getAllClients();
            return clients;
        }
        catch (error) {
            console.log("Error in getClient Service: ", error);
            throw error; // ✅ throwing so controller can catch it
        }
    }
};
exports.AuthenticationService = AuthenticationService;
exports.AuthenticationService = AuthenticationService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof src_1.UserRepositoryService !== "undefined" && src_1.UserRepositoryService) === "function" ? _a : Object, typeof (_b = typeof src_2.ClientRepositoryService !== "undefined" && src_2.ClientRepositoryService) === "function" ? _b : Object])
], AuthenticationService);


/***/ }),
/* 34 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ResponseHandlerService = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const commonConstants_1 = __webpack_require__(22);
let ResponseHandlerService = class ResponseHandlerService {
    sendSuccessResponse(res, response) {
        // response.statusCode = 200;
        // response.success = true;
        res.status(200).json(response);
    }
    sendErrorResponse(res, errorBody) {
        console.error('Error Response: ', JSON.stringify(errorBody), errorBody.statusCode, errorBody.message);
        if (!errorBody.statusCode || !errorBody.message) {
            console.log("i amiffff");
            errorBody.statusCode = commonConstants_1.ERROR_CODES.UNEXPECTED_ERROR;
            errorBody.message = commonConstants_1.ErrorMessages.UNEXPECTED_ERROR;
        }
        const body = {
            statusCode: errorBody.statusCode,
            message: errorBody.message,
            data: undefined,
            extraError: errorBody.extraError,
            success: false
        };
        res.status(errorBody.statusCode).json(body);
    }
};
exports.ResponseHandlerService = ResponseHandlerService;
exports.ResponseHandlerService = ResponseHandlerService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], ResponseHandlerService);


/***/ }),
/* 35 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AdminLoginDto = exports.CreateUserDto = void 0;
const tslib_1 = __webpack_require__(4);
const class_validator_1 = __webpack_require__(36);
const userConstants_1 = __webpack_require__(19);
const class_transformer_1 = __webpack_require__(37);
__webpack_require__(18);
class CreateUserDto {
}
exports.CreateUserDto = CreateUserDto;
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value }) => value?.trim()),
    tslib_1.__metadata("design:type", String)
], CreateUserDto.prototype, "name", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, class_transformer_1.Transform)(({ value }) => value?.trim()),
    tslib_1.__metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value }) => value?.trim()),
    tslib_1.__metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsEnum)(userConstants_1.Role),
    tslib_1.__metadata("design:type", typeof (_a = typeof userConstants_1.Role !== "undefined" && userConstants_1.Role) === "function" ? _a : Object)
], CreateUserDto.prototype, "role", void 0);
class AdminLoginDto {
}
exports.AdminLoginDto = AdminLoginDto;
tslib_1.__decorate([
    (0, class_validator_1.IsEmail)(),
    tslib_1.__metadata("design:type", String)
], AdminLoginDto.prototype, "email", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], AdminLoginDto.prototype, "password", void 0);


/***/ }),
/* 36 */
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),
/* 37 */
/***/ ((module) => {

module.exports = require("class-transformer");

/***/ }),
/* 38 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateClientDto = void 0;
const tslib_1 = __webpack_require__(4);
const class_validator_1 = __webpack_require__(36);
const userConstants_1 = __webpack_require__(19);
class CreateClientDto {
}
exports.CreateClientDto = CreateClientDto;
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateClientDto.prototype, "legal_entity_name", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateClientDto.prototype, "trading_name", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateClientDto.prototype, "county_name", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateClientDto.prototype, "state_name", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateClientDto.prototype, "city_name", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateClientDto.prototype, "street_name", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateClientDto.prototype, "zip_name", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateClientDto.prototype, "nature_of_business", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateClientDto.prototype, "website_domain_url", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateClientDto.prototype, "type_of_business", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateClientDto.prototype, "contact_name", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateClientDto.prototype, "designation", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsEmail)(),
    tslib_1.__metadata("design:type", String)
], CreateClientDto.prototype, "contact_email", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateClientDto.prototype, "phone", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateClientDto.prototype, "technical_contacts", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateClientDto.prototype, "information_security_officer", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateClientDto.prototype, "client_signoff_authority", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateClientDto.prototype, "assessment_project_name", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateClientDto.prototype, "assessment_type", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateClientDto.prototype, "assessment_category", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateClientDto.prototype, "assessment_year", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateClientDto.prototype, "pci_dss_version_application", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateClientDto.prototype, "assessment_period_covered", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsDateString)(),
    tslib_1.__metadata("design:type", String)
], CreateClientDto.prototype, "audit_start_date", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsDateString)(),
    tslib_1.__metadata("design:type", String)
], CreateClientDto.prototype, "audit_end_date", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsDateString)(),
    tslib_1.__metadata("design:type", String)
], CreateClientDto.prototype, "date_of_report_submission", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsEnum)(userConstants_1.AUDIT_STATUS),
    tslib_1.__metadata("design:type", typeof (_a = typeof userConstants_1.AUDIT_STATUS !== "undefined" && userConstants_1.AUDIT_STATUS) === "function" ? _a : Object)
], CreateClientDto.prototype, "audit_status", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    tslib_1.__metadata("design:type", String)
], CreateClientDto.prototype, "certificate_issue_date", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    tslib_1.__metadata("design:type", String)
], CreateClientDto.prototype, "certificate_expiry_date", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateClientDto.prototype, "certificate_number_unique_id", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    tslib_1.__metadata("design:type", String)
], CreateClientDto.prototype, "next_audit_due_date", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateClientDto.prototype, "name_of_qsa", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateClientDto.prototype, "qsa_license_certificate_number", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateClientDto.prototype, "audit_manager_reviewer_name", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateClientDto.prototype, "scope_of_assessment", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateClientDto.prototype, "location_of_scope", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateClientDto.prototype, "overall_compliance_status", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateClientDto.prototype, "compensating_controls_used", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateClientDto.prototype, "customized_approach_used", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateClientDto.prototype, "non_conformities_gap", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateClientDto.prototype, "non_conformities_gap_identified", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    tslib_1.__metadata("design:type", String)
], CreateClientDto.prototype, "remediation_target_date", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    tslib_1.__metadata("design:type", String)
], CreateClientDto.prototype, "revalidation_date", void 0);


/***/ }),
/* 39 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtService = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const jwt = tslib_1.__importStar(__webpack_require__(40));
const config_service_1 = __webpack_require__(3);
const commonConstants_1 = __webpack_require__(22);
let JwtService = class JwtService {
    constructor(configService) {
        this.configService = configService;
    }
    getJWTTokenInfo() {
        const expiryTimeInSecs = this.configService.get().JWT_EXPIRY_TIME;
        const JWTSecretKey = this.configService.get().JWT_SECRET_KEY;
        if (!JWTSecretKey) {
            throw new Error('JWT secret-key not provided');
        }
        return { expiryTimeInSecs, JWTSecretKey };
    }
    // public generateJWTToken(payload: Partial<JWTPayload>): Promise<string> {
    //   const { expiryTimeInSecs, JWTSecretKey } = this.getJWTTokenInfo();
    //   return new Promise((resolve, reject) => {
    //     jwt.sign(
    //       payload,
    //       Buffer.from(JWTSecretKey, 'base64'),
    //       { expiresIn: expiryTimeInSecs, algorithm: 'HS512' },
    //       (err: Error | null, token?: string) => {
    //         if (err || !token) {
    //           reject({
    //             statusCode: ERROR_CODES.ERROR_UNKNOWN_SHOW_TO_USER,
    //             message: 'Error while creating JWT token',
    //             extraError: err,
    //           });
    //         } else {
    //           resolve(token);
    //         }
    //       }
    //     );
    //   });
    // }
    generateJWTToken(payload) {
        const JWTSecretKey = process.env.JWT_SECRET_KEY; // 🔥 direct environment variable
        const expiryTimeInSecs = "1h"; // or your existing logic
        return new Promise((resolve, reject) => {
            jwt.sign(payload, JWTSecretKey, // 🔥 no Buffer, no base64 decode
            { expiresIn: expiryTimeInSecs, algorithm: 'HS512' }, (err, token) => {
                if (err || !token) {
                    reject({
                        message: 'Error while creating JWT token',
                        extraError: err,
                    });
                }
                else {
                    resolve(token);
                }
            });
        });
    }
    generateGuestJWTToken(payload) {
        const { expiryTimeInSecs, JWTSecretKey } = this.getJWTTokenInfo();
        return new Promise((resolve, reject) => {
            jwt.sign(payload, Buffer.from(JWTSecretKey, 'base64'), { expiresIn: expiryTimeInSecs, algorithm: 'HS512' }, (err, token) => {
                if (err || !token) {
                    reject({
                        statusCode: commonConstants_1.ERROR_CODES.ERROR_UNKNOWN_SHOW_TO_USER,
                        message: 'Error while creating JWT token',
                        extraError: err,
                    });
                }
                else {
                    resolve(token);
                }
            });
        });
    }
    generateJWTNeverExpToken(payload) {
        const { JWTSecretKey } = this.getJWTTokenInfo();
        return new Promise((resolve, reject) => {
            jwt.sign(payload, Buffer.from(JWTSecretKey, 'base64'), { algorithm: 'HS512' }, (err, token) => {
                if (err || !token) {
                    reject({
                        statusCode: commonConstants_1.ERROR_CODES.ERROR_UNKNOWN_SHOW_TO_USER,
                        message: 'Error while creating JWT token',
                        extraError: err,
                    });
                }
                else {
                    resolve(token);
                }
            });
        });
    }
    verifyJWTToken(token) {
        return new Promise((resolve) => {
            if (!token) {
                resolve({
                    verified: false,
                    error_code: commonConstants_1.ERROR_CODES.NOT_AUTHORIZED,
                    error_message: commonConstants_1.ErrorMessages.NOT_AUTHORIZED,
                    payload: null,
                });
                return;
            }
            const { JWTSecretKey } = this.getJWTTokenInfo();
            jwt.verify(token, Buffer.from(JWTSecretKey, 'base64'), { algorithms: ['HS512'] }, (err, decoded) => {
                if (err || !decoded) {
                    if (err instanceof jwt.TokenExpiredError) {
                        resolve({
                            verified: false,
                            error_code: commonConstants_1.ERROR_CODES.JWT_TOKEN_EXPIRED,
                            error_message: commonConstants_1.ErrorMessages.JWT_TOKEN_EXPIRED,
                            payload: null,
                        });
                    }
                    else {
                        resolve({
                            verified: false,
                            error_code: commonConstants_1.ERROR_CODES.JWT_TOKEN_INVALID,
                            error_message: commonConstants_1.ErrorMessages.JWT_TOKEN_INVALID,
                            payload: null,
                        });
                    }
                }
                else {
                    resolve({
                        verified: true,
                        error_code: 0,
                        error_message: null,
                        payload: decoded,
                    });
                }
            });
        });
    }
    getJWTTokenPayload(token) {
        if (!token) {
            return null;
        }
        return jwt.decode(token);
    }
};
exports.JwtService = JwtService;
exports.JwtService = JwtService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof config_service_1.ConfigService !== "undefined" && config_service_1.ConfigService) === "function" ? _a : Object])
], JwtService);


/***/ }),
/* 40 */
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),
/* 41 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtAuthGuard = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const jwt = tslib_1.__importStar(__webpack_require__(40));
const typeorm_1 = __webpack_require__(14);
const typeorm_2 = __webpack_require__(15);
const user_entity_1 = __webpack_require__(17);
let JwtAuthGuard = class JwtAuthGuard {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const authHeader = request.headers['authorization'] || request.headers['Authorization'];
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            throw new common_1.UnauthorizedException('Authorization token missing');
        }
        const token = authHeader.split(' ')[1];
        const secret = process.env.JWT_SECRET_KEY;
        if (!secret) {
            throw new common_1.UnauthorizedException('JWT secret not configured');
        }
        try {
            // Verify token and extract payload
            console.log("JWT Secret: ", token);
            const decoded = jwt.verify(token, secret);
            console.log("Decoded JWT Token: ", decoded);
            // Look up user in database
            const user = await this.userRepository.findOne({
                where: { user_id: decoded.userId },
            });
            console.log("Authenticated User from DB: ", user);
            if (!user) {
                throw new common_1.UnauthorizedException('User not found');
            }
            // ✅ Attach user to request object
            request.user = user;
            // Allow request to proceed
            return true;
        }
        catch (error) {
            console.error('JWT verification failed:', error.message);
            throw new common_1.UnauthorizedException('Invalid or expired token');
        }
    }
};
exports.JwtAuthGuard = JwtAuthGuard;
exports.JwtAuthGuard = JwtAuthGuard = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], JwtAuthGuard);


/***/ }),
/* 42 */
/***/ ((module) => {

module.exports = require("@nestjs/passport");

/***/ }),
/* 43 */
/***/ ((module) => {

module.exports = require("express");

/***/ }),
/* 44 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(4);
tslib_1.__exportStar(__webpack_require__(45), exports);
tslib_1.__exportStar(__webpack_require__(49), exports);


/***/ }),
/* 45 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// import { Injectable } from '@nestjs/common';
// import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
// import * as fs from 'fs';
// import * as path from 'path';
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PdfServiceService = void 0;
const tslib_1 = __webpack_require__(4);
// export interface CertificateData {
//   companyName: string;
//   issuanceDate: string;
//   type: string;
//   version: string;
//   address: string;
//   certificateNumber?: string;
//   classification?: string;
//   validTill?: string;
// }
// @Injectable()
// export class PdfServiceService {
//   async modifyExistingCertificate(
//     certificateData: CertificateData,
//     templatePath: string = 'Sample1.pdf'
//   ): Promise<Buffer> {
//     try {
//       // Read the existing PDF template
//       const templateBuffer = await this.readTemplateFile(templatePath);
//       // Convert Buffer to Uint8Array
//       const uint8Array = new Uint8Array(templateBuffer);
//       // Load the existing PDF
//       const pdfDoc = await PDFDocument.load(uint8Array);
//       const pages = pdfDoc.getPages();
//       const firstPage = pages[0];
//       // Load fonts
//       const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
//       const helveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
//       // Define text positions (you may need to adjust these coordinates)
//       const textPositions = {
//         companyName: { x: 45, y: 232, size: 20 },
//         issuanceDate: { x: 60, y: 70, size: 10 },
//         type: { x: 45, y: 210, size: 10 },
//         version: { x: 45, y: 190, size: 10 },
//         address: { x: 45, y: 170, size: 10 },
//         certificateNumber: { x: 604, y: 350, size: 10 },
//         classification: { x: 604, y: 283, size: 10 },
//         validTill: { x: 604, y: 220, size: 10 }
//       };
//       // Add company name (below "This PCI DSS Compliance certificate is proudly awarded to")
//       firstPage.drawText(certificateData.companyName, {
//         x: textPositions.companyName.x,
//         y: textPositions.companyName.y,
//         size: textPositions.companyName.size,
//         font: helveticaBold,
//         color: rgb(0, 0, 0),
//       });
//       // Add issuance details
//       firstPage.drawText(certificateData.issuanceDate, {
//         x: textPositions.issuanceDate.x,
//         y: textPositions.issuanceDate.y,
//         size: textPositions.issuanceDate.size,
//         font: helveticaFont,
//         color: rgb(0, 0, 0),
//       });
//       firstPage.drawText(certificateData.type, {
//         x: textPositions.type.x,
//         y: textPositions.type.y,
//         size: textPositions.type.size,
//         font: helveticaFont,
//         color: rgb(0, 0, 0),
//       });
//       firstPage.drawText(certificateData.version, {
//         x: textPositions.version.x,
//         y: textPositions.version.y,
//         size: textPositions.version.size,
//         font: helveticaFont,
//         color: rgb(0, 0, 0),
//       });
//       firstPage.drawText(certificateData.address, {
//         x: textPositions.address.x,
//         y: textPositions.address.y,
//         size: textPositions.address.size,
//         font: helveticaFont,
//         color: rgb(0, 0, 0),
//       });
//       if (certificateData.certificateNumber) {
//         firstPage.drawText(certificateData.certificateNumber, {
//           x: textPositions.certificateNumber.x,
//           y: textPositions.certificateNumber.y,
//           size: textPositions.certificateNumber.size,
//           font: helveticaFont,
//           color: rgb(0, 0, 0),
//         });
//       }
//       if (certificateData.classification) {
//         firstPage.drawText(certificateData.classification, {
//           x: textPositions.classification.x,
//           y: textPositions.classification.y,
//           size: textPositions.classification.size,
//           font: helveticaFont,
//           color: rgb(0, 0, 0),
//         });
//       }
//       if (certificateData.validTill) {
//         firstPage.drawText(certificateData.validTill, {
//           x: textPositions.validTill.x,
//           y: textPositions.validTill.y,
//           size: textPositions.validTill.size,
//           font: helveticaFont,
//           color: rgb(0, 0, 0),
//         });
//       }
//       // Serialize the PDF
//       const pdfBytes = await pdfDoc.save();
//       return Buffer.from(pdfBytes);
//     } catch (error) {
//       throw new Error(`Failed to modify existing certificate: ${error.message}`);
//     }
//   }
//   private async readTemplateFile(templateName: string): Promise<Buffer> {
//     try {
//       // Adjust the path based on your project structure
//       const templatePath = path.join(
//         process.cwd(),
//         'apps',
//         'auth',
//         'src',
//         'assets',
//         'certificates',
//         templateName
//       );
//       // Check if file exists
//       if (!fs.existsSync(templatePath)) {
//         throw new Error(`Template file not found: ${templatePath}`);
//       }
//       // Read the file
//       return fs.readFileSync(templatePath);
//     } catch (error) {
//       throw new Error(`Error reading template file: ${error.message}`);
//     }
//   }
//   // Helper method to find text positions (you can use this to debug coordinates)
//   async debugTemplatePositions(templatePath: string = 'Sample1.pdf'): Promise<void> {
//     const templateBuffer = await this.readTemplateFile(templatePath);
//     const uint8Array = new Uint8Array(templateBuffer);
//     const pdfDoc = await PDFDocument.load(uint8Array);
//     console.log('PDF loaded. Page count:', pdfDoc.getPages().length);
//     const firstPage = pdfDoc.getPages()[0];
//     const { width, height } = firstPage.getSize();
//     console.log('Page dimensions:', { width, height });
//     console.log('Use these coordinates to position your text:');
//     console.log('Top left: (0, 0)');
//     console.log('Top right: (' + width + ', 0)');
//     console.log('Bottom left: (0, ' + height + ')');
//     console.log('Bottom right: (' + width + ', ' + height + ')');
//   }
// }
// import { Injectable } from '@nestjs/common';
// import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
// import * as fs from 'fs';
// import * as path from 'path';
// export interface CertificateData {
//   companyName: string;
//   issuanceDate: string;
//   type: string;
//   version: string;
//   address: string;
//   certificateNumber?: string;
//   classification?: string;
//   validTill?: string;
// }
// @Injectable()
// export class PdfServiceService {
//   // Helper method to convert hex color to RGB
//   private hexToRgb(hex: string): { r: number; g: number; b: number } {
//     // Remove the # if present
//     hex = hex.replace(/^#/, '');
//     // Parse the hex values
//     const bigint = parseInt(hex, 16);
//     const r = ((bigint >> 16) & 255) / 255;
//     const g = ((bigint >> 8) & 255) / 255;
//     const b = (bigint & 255) / 255;
//     return { r, g, b };
//   }
//   async modifyExistingCertificate(
//     certificateData: CertificateData,
//     templatePath: string = 'Sample1.pdf'
//   ): Promise<Buffer> {
//     try {
//       // Read the existing PDF template
//       const templateBuffer = await this.readTemplateFile(templatePath);
//       // Convert Buffer to Uint8Array
//       const uint8Array = new Uint8Array(templateBuffer);
//       // Load the existing PDF
//       const pdfDoc = await PDFDocument.load(uint8Array);
//       const pages = pdfDoc.getPages();
//       const firstPage = pages[0];
//       // Load fonts
//       const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
//       const helveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
//       // Convert hex color to RGB
//       const companyNameColor = this.hexToRgb('#3964fe');
//       // Define text positions (you may need to adjust these coordinates)
//       const textPositions = {
//         companyName: { x: 45, y: 232, size: 20 },
//         issuanceDate: { x: 60, y: 70, size: 10 },
//         type: { x: 45, y: 210, size: 10 },
//         version: { x: 45, y: 190, size: 10 },
//         address: { x: 45, y: 170, size: 10 },
//         certificateNumber: { x: 604, y: 350, size: 10 },
//         classification: { x: 604, y: 283, size: 10 },
//         validTill: { x: 604, y: 220, size: 10 }
//       };
//       // Add company name with custom color #3964fe
//       firstPage.drawText(certificateData.companyName, {
//         x: textPositions.companyName.x,
//         y: textPositions.companyName.y,
//         size: textPositions.companyName.size,
//         font: helveticaBold,
//         color: rgb(companyNameColor.r, companyNameColor.g, companyNameColor.b),
//       });
//       // Add issuance details (keep other text in black)
//       firstPage.drawText(certificateData.issuanceDate, {
//         x: textPositions.issuanceDate.x,
//         y: textPositions.issuanceDate.y,
//         size: textPositions.issuanceDate.size,
//         font: helveticaFont,
//         color: rgb(0, 0, 0), // Black color
//       });
//       firstPage.drawText(certificateData.type, {
//         x: textPositions.type.x,
//         y: textPositions.type.y,
//         size: textPositions.type.size,
//         font: helveticaFont,
//         color: rgb(0, 0, 0), // Black color
//       });
//       firstPage.drawText(certificateData.version, {
//         x: textPositions.version.x,
//         y: textPositions.version.y,
//         size: textPositions.version.size,
//         font: helveticaFont,
//         color: rgb(0, 0, 0), // Black color
//       });
//       firstPage.drawText(certificateData.address, {
//         x: textPositions.address.x,
//         y: textPositions.address.y,
//         size: textPositions.address.size,
//         font: helveticaFont,
//         color: rgb(0, 0, 0), // Black color
//       });
//       if (certificateData.certificateNumber) {
//         firstPage.drawText(certificateData.certificateNumber, {
//           x: textPositions.certificateNumber.x,
//           y: textPositions.certificateNumber.y,
//           size: textPositions.certificateNumber.size,
//           font: helveticaFont,
//           color: rgb(0, 0, 0), // Black color
//         });
//       }
//       if (certificateData.classification) {
//         firstPage.drawText(certificateData.classification, {
//           x: textPositions.classification.x,
//           y: textPositions.classification.y,
//           size: textPositions.classification.size,
//           font: helveticaFont,
//           color: rgb(0, 0, 0), // Black color
//         });
//       }
//       if (certificateData.validTill) {
//         firstPage.drawText(certificateData.validTill, {
//           x: textPositions.validTill.x,
//           y: textPositions.validTill.y,
//           size: textPositions.validTill.size,
//           font: helveticaFont,
//           color: rgb(0, 0, 0), // Black color
//         });
//       }
//       // Serialize the PDF
//       const pdfBytes = await pdfDoc.save();
//       return Buffer.from(pdfBytes);
//     } catch (error) {
//       throw new Error(`Failed to modify existing certificate: ${error.message}`);
//     }
//   }
//   private async readTemplateFile(templateName: string): Promise<Buffer> {
//     try {
//       // Adjust the path based on your project structure
//       const templatePath = path.join(
//         process.cwd(),
//         'apps',
//         'auth',
//         'src',
//         'assets',
//         'certificates',
//         templateName
//       );
//       // Check if file exists
//       if (!fs.existsSync(templatePath)) {
//         throw new Error(`Template file not found: ${templatePath}`);
//       }
//       // Read the file
//       return fs.readFileSync(templatePath);
//     } catch (error) {
//       throw new Error(`Error reading template file: ${error.message}`);
//     }
//   }
//   // Helper method to find text positions (you can use this to debug coordinates)
//   async debugTemplatePositions(templatePath: string = 'Sample1.pdf'): Promise<void> {
//     const templateBuffer = await this.readTemplateFile(templatePath);
//     const uint8Array = new Uint8Array(templateBuffer);
//     const pdfDoc = await PDFDocument.load(uint8Array);
//     console.log('PDF loaded. Page count:', pdfDoc.getPages().length);
//     const firstPage = pdfDoc.getPages()[0];
//     const { width, height } = firstPage.getSize();
//     console.log('Page dimensions:', { width, height });
//     console.log('Use these coordinates to position your text:');
//     console.log('Top left: (0, 0)');
//     console.log('Top right: (' + width + ', 0)');
//     console.log('Bottom left: (0, ' + height + ')');
//     console.log('Bottom right: (' + width + ', ' + height + ')');
//   }
// }
// import { Injectable } from '@nestjs/common';
// import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
// import * as fs from 'fs';
// import * as path from 'path';
// export interface CertificateData {
//   companyName: string;
//   issuanceDate: string;
//   type: string;
//   version: string;
//   address: string;
//   certificateNumber?: string;
//   classification?: string;
//   validTill?: string;
// }
// @Injectable()
// export class PdfServiceService {
//   // Helper method to convert hex color to RGB
//   private hexToRgb(hex: string): { r: number; g: number; b: number } {
//     hex = hex.replace(/^#/, '');
//     const bigint = parseInt(hex, 16);
//     const r = ((bigint >> 16) & 255) / 255;
//     const g = ((bigint >> 8) & 255) / 255;
//     const b = (bigint & 255) / 255;
//     return { r, g, b };
//   }
//   // Helper method to wrap text based on maximum width
//   private wrapText(
//     text: string, 
//     font: any, 
//     fontSize: number, 
//     maxWidth: number
//   ): string[] {
//     const lines: string[] = [];
//     const words = text.split(' ');
//     let currentLine = words[0];
//     for (let i = 1; i < words.length; i++) {
//       const word = words[i];
//       const testLine = currentLine + ' ' + word;
//       const testWidth = font.widthOfTextAtSize(testLine, fontSize);
//       if (testWidth <= maxWidth) {
//         currentLine = testLine;
//       } else {
//         lines.push(currentLine);
//         currentLine = word;
//       }
//     }
//     lines.push(currentLine);
//     return lines;
//   }
//   // Helper method to calculate text width
//   private getTextWidth(text: string, font: any, fontSize: number): number {
//     return font.widthOfTextAtSize(text, fontSize);
//   }
//   async modifyExistingCertificate(
//     certificateData: CertificateData,
//     templatePath: string = 'Sample1.pdf'
//   ): Promise<Buffer> {
//     try {
//       // Read the existing PDF template
//       const templateBuffer = await this.readTemplateFile(templatePath);
//       // Convert Buffer to Uint8Array
//       const uint8Array = new Uint8Array(templateBuffer);
//       // Load the existing PDF
//       const pdfDoc = await PDFDocument.load(uint8Array);
//       const pages = pdfDoc.getPages();
//       const firstPage = pages[0];
//       // Load fonts
//       const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
//       const helveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
//       // Convert hex color to RGB
//       const companyNameColor = this.hexToRgb('#3964fe');
//       // Define text positions with max widths for wrapping
//       const textConfigurations = {
//         companyName: { 
//           x: 45, 
//           y: 232, 
//           size: 20, 
//           maxWidth: 500,  // Maximum width for company name
//           lineHeight: 24   // Line height for multi-line text
//         },
//         type: { 
//           x: 45, 
//           y: 210, 
//           size: 10, 
//           maxWidth: 500,  // Maximum width for type
//           lineHeight: 12   // Line height for multi-line text
//         },
//         address: { 
//           x: 45, 
//           y: 170, 
//           size: 10, 
//           maxWidth: 500,  // Maximum width for address
//           lineHeight: 12   // Line height for multi-line text
//         },
//         issuanceDate: { x: 60, y: 70, size: 10 },
//         version: { x: 45, y: 190, size: 10 },
//         certificateNumber: { x: 604, y: 350, size: 10 },
//         classification: { x: 604, y: 283, size: 10 },
//         validTill: { x: 604, y: 220, size: 10 }
//       };
//       // Draw company name with auto wrapping
//       const companyNameLines = this.wrapText(
//         certificateData.companyName,
//         helveticaBold,
//         textConfigurations.companyName.size,
//         textConfigurations.companyName.maxWidth
//       );
//       companyNameLines.forEach((line, index) => {
//         firstPage.drawText(line, {
//           x: textConfigurations.companyName.x,
//           y: textConfigurations.companyName.y - (index * textConfigurations.companyName.lineHeight),
//           size: textConfigurations.companyName.size,
//           font: helveticaBold,
//           color: rgb(companyNameColor.r, companyNameColor.g, companyNameColor.b),
//         });
//       });
//       // Draw type with auto wrapping
//       const typeLines = this.wrapText(
//         certificateData.type,
//         helveticaFont,
//         textConfigurations.type.size,
//         textConfigurations.type.maxWidth
//       );
//       // Adjust Y position for type based on company name lines
//       const typeYPosition = textConfigurations.type.y - 
//         (companyNameLines.length - 1) * textConfigurations.companyName.lineHeight;
//       typeLines.forEach((line, index) => {
//         firstPage.drawText(line, {
//           x: textConfigurations.type.x,
//           y: typeYPosition - (index * textConfigurations.type.lineHeight),
//           size: textConfigurations.type.size,
//           font: helveticaFont,
//           color: rgb(0, 0, 0),
//         });
//       });
//       // Draw address with auto wrapping
//       const addressLines = this.wrapText(
//         certificateData.address,
//         helveticaFont,
//         textConfigurations.address.size,
//         textConfigurations.address.maxWidth
//       );
//       // Adjust Y position for address based on previous content
//       const totalTypeLinesHeight = (typeLines.length - 1) * textConfigurations.type.lineHeight;
//       const addressYPosition = textConfigurations.address.y - 
//         (companyNameLines.length - 1) * textConfigurations.companyName.lineHeight -
//         totalTypeLinesHeight;
//       addressLines.forEach((line, index) => {
//         firstPage.drawText(line, {
//           x: textConfigurations.address.x,
//           y: addressYPosition - (index * textConfigurations.address.lineHeight),
//           size: textConfigurations.address.size,
//           font: helveticaFont,
//           color: rgb(0, 0, 0),
//         });
//       });
//       // Adjust version position based on previous content
//       const totalAddressLinesHeight = (addressLines.length - 1) * textConfigurations.address.lineHeight;
//       const versionYPosition = textConfigurations.version.y - 
//         (companyNameLines.length - 1) * textConfigurations.companyName.lineHeight -
//         totalTypeLinesHeight -
//         totalAddressLinesHeight;
//       // Add other text fields (single line)
//       firstPage.drawText(certificateData.issuanceDate, {
//         x: textConfigurations.issuanceDate.x,
//         y: textConfigurations.issuanceDate.y,
//         size: textConfigurations.issuanceDate.size,
//         font: helveticaFont,
//         color: rgb(0, 0, 0),
//       });
//       firstPage.drawText(certificateData.version, {
//         x: textConfigurations.version.x,
//         y: versionYPosition,
//         size: textConfigurations.version.size,
//         font: helveticaFont,
//         color: rgb(0, 0, 0),
//       });
//       if (certificateData.certificateNumber) {
//         firstPage.drawText(certificateData.certificateNumber, {
//           x: textConfigurations.certificateNumber.x,
//           y: textConfigurations.certificateNumber.y,
//           size: textConfigurations.certificateNumber.size,
//           font: helveticaFont,
//           color: rgb(0, 0, 0),
//         });
//       }
//       if (certificateData.classification) {
//         firstPage.drawText(certificateData.classification, {
//           x: textConfigurations.classification.x,
//           y: textConfigurations.classification.y,
//           size: textConfigurations.classification.size,
//           font: helveticaFont,
//           color: rgb(0, 0, 0),
//         });
//       }
//       if (certificateData.validTill) {
//         firstPage.drawText(certificateData.validTill, {
//           x: textConfigurations.validTill.x,
//           y: textConfigurations.validTill.y,
//           size: textConfigurations.validTill.size,
//           font: helveticaFont,
//           color: rgb(0, 0, 0),
//         });
//       }
//       // Serialize the PDF
//       const pdfBytes = await pdfDoc.save();
//       return Buffer.from(pdfBytes);
//     } catch (error) {
//       throw new Error(`Failed to modify existing certificate: ${error.message}`);
//     }
//   }
//   private async readTemplateFile(templateName: string): Promise<Buffer> {
//     try {
//       const templatePath = path.join(
//         process.cwd(),
//         'apps',
//         'auth',
//         'src',
//         'assets',
//         'certificates',
//         templateName
//       );
//       if (!fs.existsSync(templatePath)) {
//         throw new Error(`Template file not found: ${templatePath}`);
//       }
//       return fs.readFileSync(templatePath);
//     } catch (error) {
//       throw new Error(`Error reading template file: ${error.message}`);
//     }
//   }
//   // Helper method to find text positions
//   async debugTemplatePositions(templatePath: string = 'Sample1.pdf'): Promise<void> {
//     const templateBuffer = await this.readTemplateFile(templatePath);
//     const uint8Array = new Uint8Array(templateBuffer);
//     const pdfDoc = await PDFDocument.load(uint8Array);
//     console.log('PDF loaded. Page count:', pdfDoc.getPages().length);
//     const firstPage = pdfDoc.getPages()[0];
//     const { width, height } = firstPage.getSize();
//     console.log('Page dimensions:', { width, height });
//     console.log('Use these coordinates to position your text:');
//     console.log('Top left: (0, 0)');
//     console.log('Top right: (' + width + ', 0)');
//     console.log('Bottom left: (0, ' + height + ')');
//     console.log('Bottom right: (' + width + ', ' + height + ')');
//   }
// }
const common_1 = __webpack_require__(1);
const pdf_lib_1 = __webpack_require__(46);
const fs = tslib_1.__importStar(__webpack_require__(47));
const path = tslib_1.__importStar(__webpack_require__(48));
let PdfServiceService = class PdfServiceService {
    // Helper method to convert hex color to RGB
    hexToRgb(hex) {
        hex = hex.replace(/^#/, '');
        const bigint = parseInt(hex, 16);
        const r = ((bigint >> 16) & 255) / 255;
        const g = ((bigint >> 8) & 255) / 255;
        const b = (bigint & 255) / 255;
        return { r, g, b };
    }
    // Helper method to wrap text based on maximum width
    wrapText(text, font, fontSize, maxWidth) {
        const lines = [];
        const words = text.split(' ');
        let currentLine = words[0];
        for (let i = 1; i < words.length; i++) {
            const word = words[i];
            const testLine = currentLine + ' ' + word;
            const testWidth = font.widthOfTextAtSize(testLine, fontSize);
            if (testWidth <= maxWidth) {
                currentLine = testLine;
            }
            else {
                lines.push(currentLine);
                currentLine = word;
            }
        }
        lines.push(currentLine);
        return lines;
    }
    // Helper method to read image file
    async readImageFile(imageName) {
        try {
            const imagePath = path.join(process.cwd(), 'apps', 'auth', 'src', 'assets', 'certificates', imageName);
            if (!fs.existsSync(imagePath)) {
                throw new Error(`Image file not found: ${imagePath}`);
            }
            return fs.readFileSync(imagePath);
        }
        catch (error) {
            throw new Error(`Error reading image file: ${error.message}`);
        }
    }
    async modifyExistingCertificate(certificateData, templatePath = 'Sample1.pdf') {
        try {
            // Read the existing PDF template
            const templateBuffer = await this.readTemplateFile(templatePath);
            // Convert Buffer to Uint8Array
            const uint8Array = new Uint8Array(templateBuffer);
            // Load the existing PDF
            const pdfDoc = await pdf_lib_1.PDFDocument.load(uint8Array);
            const pages = pdfDoc.getPages();
            const firstPage = pages[0];
            // Load fonts
            const helveticaFont = await pdfDoc.embedFont(pdf_lib_1.StandardFonts.Helvetica);
            const helveticaBold = await pdfDoc.embedFont(pdf_lib_1.StandardFonts.HelveticaBold);
            // Load and embed the signature image
            let signatureImage;
            try {
                const signatureBuffer = await this.readImageFile('sign.png');
                const signatureUint8Array = new Uint8Array(signatureBuffer);
                // Determine image type and embed accordingly
                const imageExtension = path.extname('sign.png').toLowerCase();
                if (imageExtension === '.png') {
                    signatureImage = await pdfDoc.embedPng(signatureUint8Array);
                }
                else if (imageExtension === '.jpg' || imageExtension === '.jpeg') {
                    signatureImage = await pdfDoc.embedJpg(signatureUint8Array);
                }
                else {
                    throw new Error('Unsupported image format. Only PNG and JPG are supported.');
                }
            }
            catch (error) {
                console.warn('Could not load signature image:', error.message);
                signatureImage = null;
            }
            // Convert hex color to RGB
            const companyNameColor = this.hexToRgb('#3964fe');
            // Define text positions with max widths for wrapping
            const textConfigurations = {
                companyName: {
                    x: 45,
                    y: 232,
                    size: 20,
                    maxWidth: 500,
                    lineHeight: 24
                },
                type: {
                    x: 45,
                    y: 210,
                    size: 10,
                    maxWidth: 500,
                    lineHeight: 12
                },
                address: {
                    x: 45,
                    y: 170,
                    size: 10,
                    maxWidth: 500,
                    lineHeight: 12
                },
                issuanceDate: { x: 60, y: 70, size: 10 },
                version: { x: 45, y: 190, size: 10 },
                certificateNumber: { x: 604, y: 350, size: 10 },
                classification: { x: 604, y: 283, size: 10 },
                validTill: { x: 604, y: 220, size: 10 }
            };
            // Signature image configuration
            const signatureConfig = {
                x: 420, // X position (adjust as needed)
                y: 80, // Y position (adjust as needed)
                width: 100, // Width of the signature image
                height: 35 // Height of the signature image (maintains aspect ratio if only width or height is specified)
            };
            // Draw signature image if available
            if (signatureImage) {
                firstPage.drawImage(signatureImage, {
                    x: signatureConfig.x,
                    y: signatureConfig.y,
                    width: signatureConfig.width,
                    height: signatureConfig.height,
                });
            }
            // Draw company name with auto wrapping
            const companyNameLines = this.wrapText(certificateData.companyName, helveticaBold, textConfigurations.companyName.size, textConfigurations.companyName.maxWidth);
            companyNameLines.forEach((line, index) => {
                firstPage.drawText(line, {
                    x: textConfigurations.companyName.x,
                    y: textConfigurations.companyName.y - (index * textConfigurations.companyName.lineHeight),
                    size: textConfigurations.companyName.size,
                    font: helveticaBold,
                    color: (0, pdf_lib_1.rgb)(companyNameColor.r, companyNameColor.g, companyNameColor.b),
                });
            });
            // Draw type with auto wrapping
            const typeLines = this.wrapText(certificateData.type, helveticaFont, textConfigurations.type.size, textConfigurations.type.maxWidth);
            // Adjust Y position for type based on company name lines
            const typeYPosition = textConfigurations.type.y -
                (companyNameLines.length - 1) * textConfigurations.companyName.lineHeight;
            typeLines.forEach((line, index) => {
                firstPage.drawText(line, {
                    x: textConfigurations.type.x,
                    y: typeYPosition - (index * textConfigurations.type.lineHeight),
                    size: textConfigurations.type.size,
                    font: helveticaFont,
                    color: (0, pdf_lib_1.rgb)(0, 0, 0),
                });
            });
            // Draw address with auto wrapping
            const addressLines = this.wrapText(certificateData.address, helveticaFont, textConfigurations.address.size, textConfigurations.address.maxWidth);
            // Adjust Y position for address based on previous content
            const totalTypeLinesHeight = (typeLines.length - 1) * textConfigurations.type.lineHeight;
            const addressYPosition = textConfigurations.address.y -
                (companyNameLines.length - 1) * textConfigurations.companyName.lineHeight -
                totalTypeLinesHeight;
            addressLines.forEach((line, index) => {
                firstPage.drawText(line, {
                    x: textConfigurations.address.x,
                    y: addressYPosition - (index * textConfigurations.address.lineHeight),
                    size: textConfigurations.address.size,
                    font: helveticaFont,
                    color: (0, pdf_lib_1.rgb)(0, 0, 0),
                });
            });
            // Adjust version position based on previous content
            const totalAddressLinesHeight = (addressLines.length - 1) * textConfigurations.address.lineHeight;
            const versionYPosition = textConfigurations.version.y -
                (companyNameLines.length - 1) * textConfigurations.companyName.lineHeight -
                totalTypeLinesHeight -
                totalAddressLinesHeight;
            // Add other text fields (single line)
            firstPage.drawText(certificateData.issuanceDate, {
                x: textConfigurations.issuanceDate.x,
                y: textConfigurations.issuanceDate.y,
                size: textConfigurations.issuanceDate.size,
                font: helveticaFont,
                color: (0, pdf_lib_1.rgb)(0, 0, 0),
            });
            firstPage.drawText(certificateData.version, {
                x: textConfigurations.version.x,
                y: versionYPosition,
                size: textConfigurations.version.size,
                font: helveticaFont,
                color: (0, pdf_lib_1.rgb)(0, 0, 0),
            });
            if (certificateData.certificateNumber) {
                firstPage.drawText(certificateData.certificateNumber, {
                    x: textConfigurations.certificateNumber.x,
                    y: textConfigurations.certificateNumber.y,
                    size: textConfigurations.certificateNumber.size,
                    font: helveticaFont,
                    color: (0, pdf_lib_1.rgb)(0, 0, 0),
                });
            }
            if (certificateData.classification) {
                firstPage.drawText(certificateData.classification, {
                    x: textConfigurations.classification.x,
                    y: textConfigurations.classification.y,
                    size: textConfigurations.classification.size,
                    font: helveticaFont,
                    color: (0, pdf_lib_1.rgb)(0, 0, 0),
                });
            }
            if (certificateData.validTill) {
                firstPage.drawText(certificateData.validTill, {
                    x: textConfigurations.validTill.x,
                    y: textConfigurations.validTill.y,
                    size: textConfigurations.validTill.size,
                    font: helveticaFont,
                    color: (0, pdf_lib_1.rgb)(0, 0, 0),
                });
            }
            // Serialize the PDF
            const pdfBytes = await pdfDoc.save();
            return Buffer.from(pdfBytes);
        }
        catch (error) {
            throw new Error(`Failed to modify existing certificate: ${error.message}`);
        }
    }
    async readTemplateFile(templateName) {
        try {
            const templatePath = path.join(process.cwd(), 'apps', 'auth', 'src', 'assets', 'certificates', templateName);
            if (!fs.existsSync(templatePath)) {
                throw new Error(`Template file not found: ${templatePath}`);
            }
            return fs.readFileSync(templatePath);
        }
        catch (error) {
            throw new Error(`Error reading template file: ${error.message}`);
        }
    }
    // Helper method to find text positions
    async debugTemplatePositions(templatePath = 'Sample1.pdf') {
        const templateBuffer = await this.readTemplateFile(templatePath);
        const uint8Array = new Uint8Array(templateBuffer);
        const pdfDoc = await pdf_lib_1.PDFDocument.load(uint8Array);
        console.log('PDF loaded. Page count:', pdfDoc.getPages().length);
        const firstPage = pdfDoc.getPages()[0];
        const { width, height } = firstPage.getSize();
        console.log('Page dimensions:', { width, height });
        console.log('Use these coordinates to position your text:');
        console.log('Top left: (0, 0)');
        console.log('Top right: (' + width + ', 0)');
        console.log('Bottom left: (0, ' + height + ')');
        console.log('Bottom right: (' + width + ', ' + height + ')');
    }
    // Helper method to debug and find optimal signature position
    async debugSignaturePosition(templatePath = 'Sample1.pdf', signaturePath = 'sign.png') {
        const templateBuffer = await this.readTemplateFile(templatePath);
        const uint8Array = new Uint8Array(templateBuffer);
        const pdfDoc = await pdf_lib_1.PDFDocument.load(uint8Array);
        const firstPage = pdfDoc.getPages()[0];
        const { width, height } = firstPage.getSize();
        console.log('Page dimensions:', { width, height });
        console.log('Suggested signature positions:');
        console.log('Bottom left: (50, 100)');
        console.log('Bottom center: (' + (width / 2 - 60) + ', 100)');
        console.log('Bottom right: (' + (width - 170) + ', 100)');
        console.log('Adjust these coordinates based on your template design.');
    }
};
exports.PdfServiceService = PdfServiceService;
exports.PdfServiceService = PdfServiceService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], PdfServiceService);


/***/ }),
/* 46 */
/***/ ((module) => {

module.exports = require("pdf-lib");

/***/ }),
/* 47 */
/***/ ((module) => {

module.exports = require("fs");

/***/ }),
/* 48 */
/***/ ((module) => {

module.exports = require("path");

/***/ }),
/* 49 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PdfServiceModule = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const pdf_service_1 = __webpack_require__(45);
let PdfServiceModule = class PdfServiceModule {
};
exports.PdfServiceModule = PdfServiceModule;
exports.PdfServiceModule = PdfServiceModule = tslib_1.__decorate([
    (0, common_1.Module)({
        providers: [pdf_service_1.PdfServiceService],
        exports: [pdf_service_1.PdfServiceService],
    })
], PdfServiceModule);


/***/ }),
/* 50 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GoogleStrategy = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const passport_1 = __webpack_require__(42);
const passport_google_oauth20_1 = __webpack_require__(51);
const config_service_1 = __webpack_require__(3);
const common_2 = __webpack_require__(1);
let GoogleStrategy = class GoogleStrategy extends (0, passport_1.PassportStrategy)(passport_google_oauth20_1.Strategy, 'google') {
    constructor(configService) {
        super({
            clientID: configService.getEnvOrThrow('GOOGLE_CLIENT_ID'),
            clientSecret: configService.getEnvOrThrow('GOOGLE_CLIENT_SECRET'),
            // callbackURL: configService.getEnvOrThrow('GOOGLE_CALLBACK_URL'),
            callbackURL: `${configService.getEnvOrThrow('BACKEND_URL')}/api/auth/google/callback`,
            scope: ['email', 'profile'],
        });
        this.configService = configService;
    }
    async validate(accessToken, refreshToken, profile, done) {
        const email = profile?.emails?.[0]?.value;
        if (!email || !email.endsWith('@intercert.com')) {
            // return done(new Error('Unauthorized email domain'), false);
            return done(new common_2.UnauthorizedException('Unauthorized email domain'), false);
        }
        const user = {
            email,
            name: profile.displayName,
            provider: profile.provider,
            accessToken,
        };
        done(null, user);
    }
};
exports.GoogleStrategy = GoogleStrategy;
exports.GoogleStrategy = GoogleStrategy = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof config_service_1.ConfigService !== "undefined" && config_service_1.ConfigService) === "function" ? _a : Object])
], GoogleStrategy);


/***/ }),
/* 51 */
/***/ ((module) => {

module.exports = require("passport-google-oauth20");

/***/ }),
/* 52 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ResponseHandlerModule = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const response_handler_service_1 = __webpack_require__(34);
let ResponseHandlerModule = class ResponseHandlerModule {
};
exports.ResponseHandlerModule = ResponseHandlerModule;
exports.ResponseHandlerModule = ResponseHandlerModule = tslib_1.__decorate([
    (0, common_1.Module)({
        providers: [response_handler_service_1.ResponseHandlerService],
        exports: [response_handler_service_1.ResponseHandlerService]
    })
], ResponseHandlerModule);


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const common_1 = __webpack_require__(1);
const core_1 = __webpack_require__(2);
const config_service_1 = __webpack_require__(3);
const app_module_1 = __webpack_require__(8);
__webpack_require__(18);
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: "*",
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        allowedHeaders: "*",
    });
    const globalPrefix = 'api';
    app.setGlobalPrefix(globalPrefix);
    app.useGlobalPipes(new common_1.ValidationPipe({
        exceptionFactory: (validationErrors = []) => {
            let msg = '';
            for (const error of validationErrors) {
                msg += `Invalid ${error.property} - ${Object.values(error.constraints).join(', ')}, `;
            }
            return new common_1.BadRequestException(msg);
        },
    }));
    const config = new config_service_1.ConfigService();
    config.loadFromEnv();
    // const port = config.get().servicePorts.authentication || 3000;
    const port = 3000;
    await app.listen(port);
    // await app.listen(port, '0.0.0.0');
    // console.log(`Server running on http://0.0.0.0:${port}`);
    common_1.Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
}
bootstrap();

})();

/******/ })()
;
//# sourceMappingURL=main.js.map