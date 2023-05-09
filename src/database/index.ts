import { Sequelize } from 'sequelize';

const env = process.env.NODE_ENV || 'development';
const config = require('./config/config.js')[env];

const sequelize = new Sequelize(config.database, config.username, config.password, config);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(error => console.log('Unable to connect to the database:: ', error));

export { Sequelize, sequelize };
