const { Sequelize } = require('sequelize');

// db connection config
const sequelize = new Sequelize('postgres://knrurqte:va35r_MOOqFHP5tBi6U3ELYY62j7LmCF@salt.db.elephantsql.com/knrurqte');

// test connection function
async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = { sequelize, testConnection };