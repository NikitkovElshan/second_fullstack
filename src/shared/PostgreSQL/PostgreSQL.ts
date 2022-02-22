import {Sequelize} from 'sequelize'

export const sequelize = new Sequelize('node-test', 'postgres', '111111', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false
})


export function connectSequelize() {

    sequelize.sync().then(() => {
        console.log('Connection has been established successfully.')

    }).catch((error) => {
        console.error('Unable to connect to the database:', error)
    })
}
