const { EntitySchema } = require('typeorm');

module.exports = new EntitySchema({
    name: "Student",
    tableName: "STUDENT",
    columns: {
        id: {
            type: 'uuid',
            primary: true,
            generated: 'uuid'
        },
        // name varchar(50) 必填
        name: {
            type: 'varchar',
            length: 50,
            nullable: false
        }
    },
    relations: {
        //class_id → CLASS（必填，一個學生屬於一個班級）
        class: {
            type: 'many-to-one',
            target: 'Class',
            joinColumn: {
                name: 'class_id',
                referencedColumnName: 'id'
            },
            nullable: false,
        },
    }
});