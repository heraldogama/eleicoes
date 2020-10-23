import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createUrna1603433026807 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "urna",
        columns: [
          {
            name: "id",
            type: "integer",
            unsigned: true,
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "address",
            type: "varchar",
          },
          {
            name: "school",
            type: "varchar",
          },
          {
            name: "latitude",
            type: "decimal",
          },
          {
            name: "longitude",
            type: "decimal",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
