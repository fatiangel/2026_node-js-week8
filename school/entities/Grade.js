const { EntitySchema } = require('typeorm');

module.exports = new EntitySchema({
    name: "Grade",
    tableName: "GRADE",
    columns: {
        id: {
            type: 'uuid',
            primary: true,
            generated: 'uuid'
        },
        // score integer 必填
        score: {
            type: 'integer',
            nullable: false
        },
        // ... 原本的欄位保持不動 ..
        retake_score: {
            type: "integer",
            nullable: true, // ← 已有資料，必須允許為空
        },
    },
    relations: {
        // student_id → STUDENT、subject_id → SUBJECT（皆必填，一筆成績會對應到一位學生與一個科目）
        student: {
            type: 'many-to-one',
            target: 'Student',
            joinColumn: {
                name: 'student_id',
                referencedColumnName: 'id'
            },
            nullable: false,
        },
        subject: {
            type: 'many-to-one',
            target: 'Subject',
            joinColumn: {
                name: 'subject_id',
                referencedColumnName: 'id'
            },
            nullable: false,
        },
    }
});