const Sequelize = require('sequelize');

const sequelize = new Sequelize('expense1','root','handage@12',{dialect:'mysql',host:'localhost'}
);

module.exports =sequelize;