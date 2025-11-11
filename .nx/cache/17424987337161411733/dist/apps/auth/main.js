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


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConfigService = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const config_interface_1 = __webpack_require__(5);
const config_default_1 = __webpack_require__(6);
const dotenv_1 = __webpack_require__(7);
(0, dotenv_1.config)();
let ConfigService = class ConfigService {
    constructor(data = config_default_1.DEFAULT_CONFIG) {
        this.config = data;
    }
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
    get configData() {
        return this.config;
    }
    // ✅ Add this
    get() {
        return this.config;
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
const config_module_1 = __webpack_require__(24);
const config_service_1 = __webpack_require__(3);
const authentication_module_1 = __webpack_require__(27);
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            src_1.DBModule.forRoot(),
            config_module_1.ConfigModule,
            typeorm_1.TypeOrmModule.forFeature([config_service_1.ConfigService]),
            authentication_module_1.AuthenticationModule
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
tslib_1.__exportStar(__webpack_require__(23), exports);
tslib_1.__exportStar(__webpack_require__(26), exports);
tslib_1.__exportStar(__webpack_require__(16), exports);


/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(4);
tslib_1.__exportStar(__webpack_require__(13), exports);


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
const commonConstants_1 = __webpack_require__(20);
const bcryptUtil_1 = __webpack_require__(21);
let UserRepositoryService = class UserRepositoryService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async createSuperAdmin() {
        try {
            // Check if a super admin already exists
            // If it exists, throw an error to prevent duplicate super admins
            const existingUser = await this.userRepository.findOne({
                where: { email: 'superadmin@example.com' }
            });
            if (existingUser) {
                throw { message: "Super Admin already exists", statusCode: commonConstants_1.ERROR_CODES.BAD_REQUEST };
            }
            const hashedPassword = await (0, bcryptUtil_1.generatePasswordHash)('superadminpassword');
            const superAdmin = this.userRepository.create({
                name: 'Super Admin',
                email: 'superadmin@example.com',
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


/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.User = void 0;
const tslib_1 = __webpack_require__(4);
const typeorm_1 = __webpack_require__(15);
__webpack_require__(18);
const userConstants_1 = __webpack_require__(19);
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
    (0, typeorm_1.Column)({ default: true }),
    tslib_1.__metadata("design:type", Boolean)
], User.prototype, "isActive", void 0);
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
exports.OTP_REQUEST_LIMITS = exports.LOGIN_BY = exports.OTP_SEND_ON = exports.OTP_TYPE = exports.SESSION_STATUS = exports.USER_TYPE = exports.CLIENT_ROLES = exports.ADMIN_ROLES = exports.Role = exports.DEFAULT_USER_ROLES = exports.ACCOUNT_STATUS = void 0;
var ACCOUNT_STATUS;
(function (ACCOUNT_STATUS) {
    ACCOUNT_STATUS["ACTIVE"] = "ACTIVE";
    ACCOUNT_STATUS["INACTIVE"] = "INACTIVE";
    ACCOUNT_STATUS["BLOCKED"] = "BLOCKED";
    ACCOUNT_STATUS["DELETED"] = "DELETED";
})(ACCOUNT_STATUS || (exports.ACCOUNT_STATUS = ACCOUNT_STATUS = {}));
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
/* 21 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.checkPasswordHash = exports.generatePasswordHash = void 0;
const tslib_1 = __webpack_require__(4);
const bcrypt = tslib_1.__importStar(__webpack_require__(22));
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
/* 22 */
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var DBModule_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DBModule = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const config_service_1 = __webpack_require__(3);
const config_module_1 = __webpack_require__(24);
const typeorm_1 = __webpack_require__(14);
const user_entity_1 = __webpack_require__(17);
const user_repository_1 = __webpack_require__(13);
const utils_1 = __webpack_require__(25);
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
            entities: [user_entity_1.User],
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
            entities: [user_entity_1.User], // Alternatively let TypeORM auto-load entities
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
                typeorm_1.TypeOrmModule.forFeature([user_entity_1.User]),
            ],
            controllers: [],
            providers: [
                user_repository_1.UserRepositoryService,
                {
                    provide: utils_1.TransactionManager,
                    useFactory: (dataSource) => new utils_1.TransactionManager(dataSource),
                    inject: [typeorm_2.DataSource],
                },
            ],
            exports: [user_repository_1.UserRepositoryService],
        };
    }
};
exports.DBModule = DBModule;
exports.DBModule = DBModule = DBModule_1 = tslib_1.__decorate([
    (0, common_1.Module)({})
], DBModule);


/***/ }),
/* 24 */
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
/* 25 */
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
/* 26 */
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
/* 27 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthenticationModule = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const authentication_controller_1 = __webpack_require__(28);
const authentication_service_1 = __webpack_require__(29);
const src_1 = __webpack_require__(11);
const typeorm_1 = __webpack_require__(14);
const config_module_1 = __webpack_require__(24);
const config_service_1 = __webpack_require__(3);
const response_handler_module_1 = __webpack_require__(33);
let AuthenticationModule = class AuthenticationModule {
};
exports.AuthenticationModule = AuthenticationModule;
exports.AuthenticationModule = AuthenticationModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            src_1.DBModule.forRoot(),
            config_module_1.ConfigModule,
            response_handler_module_1.ResponseHandlerModule,
            typeorm_1.TypeOrmModule.forFeature([config_service_1.ConfigService]),
        ],
        controllers: [authentication_controller_1.AuthenticationController],
        providers: [authentication_service_1.AuthenticationService],
    })
], AuthenticationModule);


/***/ }),
/* 28 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthenticationController = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const authentication_service_1 = __webpack_require__(29);
const response_handler_service_1 = __webpack_require__(30);
const user_dto_1 = __webpack_require__(31);
let AuthenticationController = class AuthenticationController {
    constructor(authenticationService, responseHandlerService) {
        this.authenticationService = authenticationService;
        this.responseHandlerService = responseHandlerService;
    }
    getStatus() {
        return { message: 'Authentication service is running Testing' };
    }
    // Endpoint for super admin registration
    async registerSuperAdmin(res, req) {
        try {
            const response = await this.authenticationService.registerSuperAdmin();
            return this.responseHandlerService.sendSuccessResponse(res, response);
        }
        catch (error) {
            console.log("Error in registerSuperAdmin: ", error);
            return this.responseHandlerService.sendErrorResponse(res, error);
        }
    }
    // Endpoint for super admin login
    async loginSuperAdmin(loginDto, req, res) {
        try {
            // console.log("Login DTO: ", loginDto);
            const response = await this.authenticationService.loginSuperAdmin(loginDto);
            return this.responseHandlerService.sendSuccessResponse(res, response);
        }
        catch (error) {
            console.log("Error in loginSuperAdmin: ", error);
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
    tslib_1.__metadata("design:paramtypes", [typeof (_c = typeof Response !== "undefined" && Response) === "function" ? _c : Object, typeof (_d = typeof Request !== "undefined" && Request) === "function" ? _d : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthenticationController.prototype, "registerSuperAdmin", null);
tslib_1.__decorate([
    (0, common_1.Post)('super-admin-login'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__param(1, (0, common_1.Req)()),
    tslib_1.__param(2, (0, common_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_e = typeof user_dto_1.AdminLoginDto !== "undefined" && user_dto_1.AdminLoginDto) === "function" ? _e : Object, typeof (_f = typeof Request !== "undefined" && Request) === "function" ? _f : Object, typeof (_g = typeof Response !== "undefined" && Response) === "function" ? _g : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthenticationController.prototype, "loginSuperAdmin", null);
exports.AuthenticationController = AuthenticationController = tslib_1.__decorate([
    (0, common_1.Controller)('auth'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof authentication_service_1.AuthenticationService !== "undefined" && authentication_service_1.AuthenticationService) === "function" ? _a : Object, typeof (_b = typeof response_handler_service_1.ResponseHandlerService !== "undefined" && response_handler_service_1.ResponseHandlerService) === "function" ? _b : Object])
], AuthenticationController);


/***/ }),
/* 29 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthenticationService = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const userConstants_1 = __webpack_require__(19);
const src_1 = __webpack_require__(11);
const commonConstants_1 = __webpack_require__(20);
const bcryptUtil_1 = __webpack_require__(21);
let AuthenticationService = class AuthenticationService {
    constructor(userRepositoryService) {
        this.userRepositoryService = userRepositoryService;
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
};
exports.AuthenticationService = AuthenticationService;
exports.AuthenticationService = AuthenticationService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof src_1.UserRepositoryService !== "undefined" && src_1.UserRepositoryService) === "function" ? _a : Object])
], AuthenticationService);


/***/ }),
/* 30 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ResponseHandlerService = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const commonConstants_1 = __webpack_require__(20);
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
/* 31 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AdminLoginDto = exports.CreateUserDto = void 0;
const tslib_1 = __webpack_require__(4);
const class_validator_1 = __webpack_require__(32);
const userConstants_1 = __webpack_require__(19);
__webpack_require__(18);
class CreateUserDto {
}
exports.CreateUserDto = CreateUserDto;
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], CreateUserDto.prototype, "name", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsEmail)(),
    tslib_1.__metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
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
/* 32 */
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),
/* 33 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ResponseHandlerModule = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const response_handler_service_1 = __webpack_require__(30);
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

// /**
//  * This is not a production server yet!
//  * This is only a minimal backend to get started.
//  */
Object.defineProperty(exports, "__esModule", ({ value: true }));
// import { Logger } from '@nestjs/common';
// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app/app.module';
// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   const globalPrefix = 'api';
//   app.setGlobalPrefix(globalPrefix);
//   const port = process.env.PORT || 3000;
//   await app.listen(port);
//   Logger.log(
//     `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
//   );
// }
// bootstrap();
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
    const port = config.get().servicePorts.authentication || 3000;
    await app.listen(port);
    common_1.Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
}
bootstrap();

})();

/******/ })()
;
//# sourceMappingURL=main.js.map