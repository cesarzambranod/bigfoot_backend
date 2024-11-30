import { Table } from "typeorm";

export default class User1729692911353 {
    queryRunner
    async up(queryRunner) {
        await queryRunner.createTable(new Table({
            name: 'users',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                },

                {
                    name: 'email',
                    type: 'varchar',
                    isUnique: true,
                },
                {
                    name: 'password_hash',
                    type: 'varchar',
                },
                {
                    name: 'email_verified',
                    type: 'boolean',
                    default: false,
                },
                {
                    name: 'verfication_token',
                    type: 'varchar',
                },
                
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP',
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP',
                },
                {
                    name: 'deleted_at',
                    type: 'timestamp',
                    isNullable: true,
                },
            ],
        }));
    }

    async down(queryRunner) {
        await queryRunner.dropTable('users');
    }

}
