// 'use strict';
// module.exports = {
//   up: (queryInterface, Sequelize) => {
//     return queryInterface.createTable('course', {
//       id: {
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true,
//         type: Sequelize.INTEGER
//       },
//       id: {
//         type: Sequelize.BIGINT
//       },
//       name: {
//         type: Sequelize.STRING
//       },
//       school_id: {
//         type: Sequelize.BIGINT
//       },
//       createdAt: {
//         allowNull: false,
//         type: Sequelize.DATE
//       },
//       updatedAt: {
//         allowNull: false,
//         type: Sequelize.DATE
//       }
//     });
//   },
//   down: (queryInterface, Sequelize) => {
//     return queryInterface.dropTable('course');
//   }
// };