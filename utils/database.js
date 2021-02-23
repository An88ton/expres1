const Sequelize = require("sequelize");

const DB_NAME = 'node-todo';
const USER_NAME = 'postgres';
const PASSWORD = 'postgres12';
const sequelize = new Sequelize(DB_NAME, USER_NAME, PASSWORD, {
    host: 'localhost',
    dialect: 'postgres',
});

module.exports = sequelize;