'use strict';
module.exports = (sequelize, DataTypes) => {
  const classroom = sequelize.define('classroom', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true
    },
    enabled: {
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING,
    },
    grade_id: {
      type: DataTypes.BIGINT
    }
  }, 
  {
    freezeTableName: true,
    timestamps: false
  });
  classroom.associate = function(models) {
    // associations can be defined here
    classroom.hasMany(models.teacherenrollment, { foreignKey: 'classroom_id' });
    classroom.belongsTo(models.grade, { foreignKey: 'grade_id' });
    classroom.hasMany(models.studentenrollment, { foreignKey: 'classroom_id' });
  };
  return classroom;
};