const { EntitySchema } = require('typeorm');

module.exports = new EntitySchema({
    name: "Subject",
    tableName: "SUBJECT",
    columns: {
        id: {
            type: 'uuid',
            primary: true,
            generated: 'uuid'
        },
        //name varchar(50) 必填
        name: {
            type: 'varchar',
            length: 50,
            nullable: false
        }
    }
});