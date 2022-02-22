import {Model, DataTypes} from 'sequelize';
import {sequelize} from '../shared/PostgreSQL/PostgreSQL'





export  class Class extends Model {
    public id!: number
    public  year: number
    public mnemo: string
    public classroom_teacher_id: number

}

Class.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    year: {
        type: DataTypes.STRING,
        allowNull: false
    },
    mnemo: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    classroom_teacher_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize: sequelize,
    tableName: 'Class',
    timestamps: false
})

