import { DataSource } from 'typeorm'

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'test',
  database: 'test',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: false,
  migrations: ['dist/**/migrations/*.js'],
  migrationsTableName: 'migrations',
});
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
  imports:[
      TypeOrmModule.forRoot(),
  ],
})
export class AppModule {}
