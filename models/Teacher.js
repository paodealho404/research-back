'use strict';
module.exports = (sequelize, DataTypes) => {
  const teacherenrollment = sequelize.define('teacherenrollment', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    course_id: {
      type: DataTypes.BIGINT
    },
    teacher_id: {
      type: DataTypes.BIGINT
    },
    classroom_id: {
      type: DataTypes.BIGINT
    }
  }, {
    freezeTableName: true,
    timestamps: false
  });
  teacherenrollment.associate = function(models) {
    // associations can be defined here
    teacherenrollment.belongsTo(models.course, {foreignKey: 'course_id'});
    teacherenrollment.belongsTo(models.user_, {foreignKey: 'teacher_id'});
    teacherenrollment.belongsTo(models.classroom, {foreignKey: 'classroom_id'});
  };
  return teacherenrollment;
};