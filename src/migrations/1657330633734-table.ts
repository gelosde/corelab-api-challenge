import {MigrationInterface, QueryRunner} from "typeorm";

export class table1657330633734 implements MigrationInterface {
    name = 'table1657330633734'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "veicle_table" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "description" character varying NOT NULL, "plate" character varying NOT NULL, "color" character varying NOT NULL, "isFavorite" boolean NOT NULL DEFAULT false, "year" date NOT NULL, "price_max" double precision NOT NULL, "price_min" double precision NOT NULL, CONSTRAINT "UQ_9091193da869e9d4c4c0d8cdb2b" UNIQUE ("plate"), CONSTRAINT "PK_46e58d51543e1e9c94284db4326" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "veicle_table"`);
    }

}
