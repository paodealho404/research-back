'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('instructionalresourcesequences', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.BIGINT
      },
      number_of_resources: {
        type: Sequelize.INTEGER
      },
      percentage: {
        type: Sequelize.FLOAT
      },
      statement: {
        type: Sequelize.STRING
      },
      enabled: {
        type: Sequelize.INTEGER
      },
      curriculum_id: {
        type: Sequelize.BIGINT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('instructionalresourcesequences');
  }
};