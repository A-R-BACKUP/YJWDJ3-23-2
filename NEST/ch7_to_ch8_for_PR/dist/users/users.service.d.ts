import { EmailService } from 'src/email/email.service';
import { UserInfo } from './UserInfo';
import { DataSource, Repository } from 'typeorm';
import { UserEntity } from './entity/user.entity';
export declare class UsersService {
    private emailService;
    private usersRepository;
    private dataSource;
    constructor(emailService: EmailService, usersRepository: Repository<UserEntity>, dataSource: DataSource);
    createUser(name: string, email: string, password: string): Promise<void>;
    private checkUserExists;
    private saveUser;
    private saveUserUsingQueryRunner;
    private saveUserUsingTransaction;
    private sendMemberJoinEmail;
    verifyEmail(signupVerifyToken: string): Promise<string>;
    login(email: string, password: string): Promise<string>;
    getUserInfo(userId: string): Promise<UserInfo>;
}
