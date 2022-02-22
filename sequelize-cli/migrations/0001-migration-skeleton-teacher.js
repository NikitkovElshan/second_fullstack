'use strict';



module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Teacher', {
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
            subject: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Teacher');
    }
};
