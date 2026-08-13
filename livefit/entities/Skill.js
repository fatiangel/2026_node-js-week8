const { EntitySchema } = require('typeorm');

module.exports = new EntitySchema({
  name: "Skill",
  tableName: "SKILL",
  columns: {
    id: {
      type: "uuid",
      primary: true,
      generated: "uuid",
    },
    // name varchar(50) 必填且唯一
    name: {
      type: "varchar",
      length: 50,
      unique: true,
      nullable: false
    }
  }
});
