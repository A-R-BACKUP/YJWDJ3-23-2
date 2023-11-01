"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserTable1697438721996 = void 0;
class CreateUserTable1697438721996 {
    constructor() {
        this.name = 'CreateUserTable1697438721996';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`User\` DROP COLUMN \`name\``);
        await queryRunner.query(`ALTER TABLE \`User\` ADD \`name\` varchar(35) NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`User\` DROP COLUMN \`name\``);
        await queryRunner.query(`ALTER TABLE \`User\` ADD \`name\` varchar(30) NOT NULL`);
    }
}
exports.CreateUserTable1697438721996 = CreateUserTable1697438721996;
//# sourceMappingURL=1697438721996-CreateUserTable.js.map