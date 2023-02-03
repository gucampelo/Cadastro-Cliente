const Sequelize = require('sequelize');
const sequelize = new Sequelize('agendamento', 'root', 'Dio135@',
                {dialect: 'mysql', host: 'localhost', port: 3306});
module.exports = sequelize;