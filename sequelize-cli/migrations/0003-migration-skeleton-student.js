'use strict';



module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Student', {
            id: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            surname: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
            },
            name: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
            },
            patronymic: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
            },
            born: {
                type: Sequelize.DataTypes.INTEGER,
                allowNull: false
            },
            gender: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
            },
            class_id: {
                type: Sequelize.DataTypes.INTEGER,
                references: {
                    model: {
                        tableName: 'Class'
                    },
                    key: 'id'
                },
                onDelete: 'CASCADE',
                allowNull: false
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Student');
    }
};
