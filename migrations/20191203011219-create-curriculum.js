// 'use strict';
// module.exports = {
//   up: (queryInterface, Sequelize) => {
//     return queryInterface.createTable('curriculum', {
//       id: {
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true,
//         type: Sequelize.INTEGER
//       },
//       id: {
//         type: Sequelize.BIGINT
//       },
//       domain_id: {
//         type: Sequelize.BIGINT
//       },
//       enabled: {
//         type: Sequelize.INTEGER
//       },
//       name: {
//         type: Sequelize.STRING
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
//     return queryInterface.dropTable('curriculum');
//   }
// };