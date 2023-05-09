module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Food', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      imgUrl: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nrOfRatings: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      rating: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Food');
  },
};
