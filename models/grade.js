'use strict';
module.exports = (sequelize, DataTypes) => {
  const grade = sequelize.define('grade', {
    id: {
      type:DataTypes.BIGINT,
      primaryKey: true
    }
  }, 
  {
    freezeTableName: true,
    timestamps: false
  });
  grade.associate = function(models) {
    // associations can be defined here
    grade.hasMany(models.course, { foreignKey: 'grade_id' });
    grade.hasMany(models.classroom, { foreignKey: 'grade_id' });
  };
  return grade;
};