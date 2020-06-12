'use strict';
module.exports = (sequelize, DataTypes) => {
  const studentenrollment = sequelize.define('studentenrollment', {
    id: { 
      type:DataTypes.BIGINT,
      primaryKey: true
    },
    enabled: {
      type:DataTypes.INTEGER
    },
    student_id: {
      type:DataTypes.BIGINT
    },
    classroom_id: {
      type:DataTypes.BIGINT
    }
  }, 
  {
    freezeTableName: true,
    timestamps: false
  });
  studentenrollment.associate = function(models) {
    // associations can be defined here
    studentenrollment.belongsTo(models.user_, {foreignKey: 'student_id'});
    studentenrollment.belongsTo(models.classroom, {foreignKey: 'classroom_id'});
  };
  return studentenrollment;
};