const Sequelize = require('sequelize');

const sequelize = require('../utils/database');


const todo = sequelize.define('Todo', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER
    },
    done: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    date: {
        type: Sequelize.DATE,
        allowNull: false
    }

});

const user = sequelize.define('User', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER
    },
    username: { 
        allowNull: false,
        type: Sequelize.STRING
    },
    password: {
        allowNull: false,
        type: Sequelize.STRING 
    }
});

user.hasMany(todo);

module.exports = {
    user: user,
    todo: todo
};
