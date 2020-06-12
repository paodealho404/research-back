// 'use strict';
// module.exports = {
//   up: (queryInterface, Sequelize) => {
//     return queryInterface.createTable('teacherenrollment', {
//       id: {
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true,
//         type: Sequelize.INTEGER
//       },
//       id: {
//         type: Sequelize.BIGINT
//       },
//       course_id: {
//         type: Sequelize.BIGINT,
//         references: {
//           model: 'Class',
//           key: 'id'
//         }
//       },
//       teacher_id: {
//         type: Sequelize.BIGINT,
//         references: {
//           model: 'User',
//           key: 'id'
//         }
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
//     return queryInterface.dropTable('teacherenrollment');
//   }
// };