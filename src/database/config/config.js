const config = {
  development: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: 'localhost',
    dialect: 'mysql',
    define: {
      freezeTableName: true,
    },
  },
};

module.exports = config;
