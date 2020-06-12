'use strict';

module.exports = (sequelize, DataTypes) => {
  const user_ = sequelize.define('user_', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING
    },
    login: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    },
    role: {
      type: DataTypes.STRING
    }
  }, 
  {
    freezeTableName: true,
    timestamps: false
  });
  user_.associate = function(models) {
    // associations can be defined here
    user_.hasMany(models.teacherenrollment, {foreignKey: 'teacher_id'});
    user_.hasMany(models.studentenrollment, {foreignKey: 'student_id'});
    user_.hasMany(models.studentgamificationinformation, { foreignKey: 'user_id' });
    user_.hasMany(models.instructionalresourcesequencinghistoric, { foreignKey: 'user_id' });
    user_.belongsToMany(models.mission, {through: 'mission_user_', foreignKey: 'user_id'});
  };
  return user_;
};