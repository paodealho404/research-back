'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('instructionalresourceunithistorics', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.BIGINT
      },
      answeredAt: {
        type: Sequelize.DATE
      },
      completed: {
        type: Sequelize.INTEGER
      },
      score: {
        type: Sequelize.FLOAT
      },
      resourceSequencingHistoric_id: {
        type: Sequelize.BIGINT
      },
      enabled: {
        type: Sequelize.INTEGER
      },
      resourceUnit_id: {
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
    return queryInterface.dropTable('instructionalresourceunithistorics');
  }
};