/**
 * @typedef {import('typeorm').MigrationInterface} MigrationInterface
 * @typedef {import('typeorm').QueryRunner} QueryRunner
 */

/**
 * @class
 * @implements {MigrationInterface}
 */
module.exports = class GradeScoreColumn1786655896253 {
    name = 'GradeScoreColumn1786655896253'

    /**
     * @param {QueryRunner} queryRunner
     */
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "GRADE" RENAME COLUMN "name" TO "score"`);
        await queryRunner.query(`ALTER TABLE "GRADE" DROP COLUMN "score"`);
        await queryRunner.query(`ALTER TABLE "GRADE" ADD "score" integer NOT NULL`);
    }

    /**
     * @param {QueryRunner} queryRunner
     */
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "GRADE" DROP COLUMN "score"`);
        await queryRunner.query(`ALTER TABLE "GRADE" ADD "score" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "GRADE" RENAME COLUMN "score" TO "name"`);
    }
}
