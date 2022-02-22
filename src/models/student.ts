import {Model, DataTypes} from 'sequelize';
import {sequelize} from '../shared/PostgreSQL/PostgreSQL'


export class Student extends Model{
        public  id!: number
        public  surname: string
        public  name: string
        public  patronymic: string
        public  born: number
        public  gender : string
        public  class_id : number
}

Student.init({
        id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
        },
        surname: {
                type: DataTypes.STRING,
                allowNull: false
        },
        name: {
                type: DataTypes.STRING,
                allowNull: false
        },
        patronymic: {
                type: DataTypes.STRING,
                allowNull: false
        },
        born: {
                type: DataTypes.INTEGER,
                allowNull: false
        },
        gender: {
                type: DataTypes.STRING,
                allowNull: false
        },
        class_id: {
                type: DataTypes.INTEGER,
                allowNull: false
        },
}, {
        sequelize: sequelize,
        tableName: 'Student',
        timestamps: false
})