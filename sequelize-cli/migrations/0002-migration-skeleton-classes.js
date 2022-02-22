'use strict';



module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Class', {
            id: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            year: {
                type: Sequelize.DataTypes.INTEGER,
                allowNull: false
            },
            mnemo: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
            },
            classroom_teacher_id: {
                type: Sequelize.DataTypes.INTEGER,
                references: {
                    model: {
                        tableName: 'Teacher'
                    },
                    key: 'id'
                },
                onDelete: 'CASCADE',
                allowNull: false
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Class');
    }
};
