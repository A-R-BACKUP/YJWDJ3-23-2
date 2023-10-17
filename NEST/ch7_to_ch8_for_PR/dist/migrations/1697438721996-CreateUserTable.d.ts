import { MigrationInterface, QueryRunner } from "typeorm";
export declare class CreateUserTable1697438721996 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
