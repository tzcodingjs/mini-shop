// 引入orm模型
const Sequelize = require('sequelize');
const sequelize = new Sequelize('minishop', 'root', '123456', {
    host: '127.0.0.1',
    dialect: 'mysql',
    operatorsAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    timezone: '+08:00'
});

module.exports = sequelize
