'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('instructionalresourceunits', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.BIGINT
      },
      percentage: {
        type: Sequelize.FLOAT
      },
      enabled: {
        type: Sequelize.INTEGER
      },
      resource_unit_order: {
        type: Sequelize.INTEGER
      },
      resource_id: {
        type: Sequelize.BIGINT
      },
      instructionalResourceSequence_id: {
        type: Sequelize.BIGINT
      },
      resource_type: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('instructionalresourceunits');
  }
};