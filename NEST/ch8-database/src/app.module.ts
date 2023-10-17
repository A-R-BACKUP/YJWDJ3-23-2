import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import emailConfig from './config/emailConfig';
import { validationSchema } from './config/validationSchema';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    UsersModule,
    ConfigModule.forRoot({
      envFilePath: [`${__dirname}/config/env/.env`],
      load: [emailConfig],
      isGlobal: true,
      validationSchema,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST, // 'localhost',
      port: 3306,
      username: process.env.DATABASE_USERNAME, // 'root',
      password: process.env.DATABASE_PASSWORD, // 'test',
      database: 'test',
      entities: ['dist/**/*.entity{.ts,.js}x'],
      // entities: [__dirname + '/**/*.entity{.ts,.js}x'],
      synchronize: process.env.DATABASE_SYNCHRONIZE === 'true',
      migrations: ['dist/**/migrations/*.js'],
      migrationsTableName: 'migrations',
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
