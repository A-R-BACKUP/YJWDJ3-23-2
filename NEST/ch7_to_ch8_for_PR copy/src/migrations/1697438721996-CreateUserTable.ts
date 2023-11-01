import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUserTable1697438721996 implements MigrationInterface {
    name = 'CreateUserTable1697438721996'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`User\` DROP COLUMN \`name\``);
        await queryRunner.query(`ALTER TABLE \`User\` ADD \`name\` varchar(35) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`User\` DROP COLUMN \`name\``);
        await queryRunner.query(`ALTER TABLE \`User\` ADD \`name\` varchar(30) NOT NULL`);
    }

}
