"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const uuid = require("uuid");
const common_1 = require("@nestjs/common");
const email_service_1 = require("../email/email.service");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./entity/user.entity");
const ulid_1 = require("ulid");
let UsersService = class UsersService {
    constructor(emailService, usersRepository, dataSource) {
        this.emailService = emailService;
        this.usersRepository = usersRepository;
        this.dataSource = dataSource;
    }
    async createUser(name, email, password) {
        const userExist = await this.checkUserExists(email);
        if (userExist) {
            throw new common_1.UnprocessableEntityException('해당 이메일로는 가입할 수 없습니다.');
        }
        const signupVerifyToken = uuid.v1();
        await this.saveUser(name, email, password, signupVerifyToken);
    }
    async checkUserExists(emailAddress) {
        const user = await this.usersRepository.findOne({
            where: {
                email: emailAddress
            }
        });
        return user !== null;
    }
    async saveUser(name, email, password, signupVerifyToken) {
        const user = new user_entity_1.UserEntity();
        user.id = (0, ulid_1.ulid)();
        user.name = name;
        user.email = email;
        user.password = password;
        user.signupVerifyToken = signupVerifyToken;
        await this.usersRepository.save(user);
    }
    async saveUserUsingQueryRunner(name, email, password, signupVerifyToken) {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const user = new user_entity_1.UserEntity();
            user.id = (0, ulid_1.ulid)();
            user.name = name;
            user.email = email;
            user.password = password;
            user.signupVerifyToken = signupVerifyToken;
            await queryRunner.manager.save(user);
            await queryRunner.commitTransaction();
        }
        catch (e) {
            await queryRunner.rollbackTransaction();
        }
        finally {
            await queryRunner.release();
        }
    }
    async saveUserUsingTransaction(name, email, password, signupVerifyToken) {
        await this.dataSource.transaction(async (manager) => {
            const user = new user_entity_1.UserEntity();
            user.id = (0, ulid_1.ulid)();
            user.name = name;
            user.email = email;
            user.password = password;
            user.signupVerifyToken = signupVerifyToken;
            await manager.save(user);
        });
    }
    async sendMemberJoinEmail(email, signupVerifyToken) {
        await this.emailService.sendMemberJoinVerification(email, signupVerifyToken);
    }
    async verifyEmail(signupVerifyToken) {
        throw new Error('Method not implemented.');
    }
    async login(email, password) {
        throw new Error('Method not implemented.');
    }
    async getUserInfo(userId) {
        throw new Error('Method not implemented.');
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [email_service_1.EmailService,
        typeorm_2.Repository,
        typeorm_2.DataSource])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map