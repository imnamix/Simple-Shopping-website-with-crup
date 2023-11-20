const Sequelize = require('sequelize');

const sequelize = new Sequelize('namitk', 'root', '', {dialect: 'mysql', host: 'localhost'});

module.exports = sequelize;