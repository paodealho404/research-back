'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('survey', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.INTEGER
      },
      participant_id: {
        type: Sequelize.INTEGER
      },
      q1: {
        type: Sequelize.TEXT
      },
      q2: {
        type: Sequelize.TEXT
      },
      q3: {
        type: Sequelize.TEXT
      },
      q4: {
        type: Sequelize.TEXT
      },
      q5: {
        type: Sequelize.TEXT
      },
      q6: {
        type: Sequelize.TEXT
      },
      q7: {
        type: Sequelize.TEXT
      },
      q8: {
        type: Sequelize.TEXT
      },
      q9: {
        type: Sequelize.TEXT
      },
      openQuestion1: {
        type: Sequelize.TEXT
      },
      openQuestion2: {
        type: Sequelize.TEXT
      },
      survey_type: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('survey');
  }
};