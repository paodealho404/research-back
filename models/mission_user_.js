'use strict';
module.exports = (sequelize, DataTypes) => {
  const mission_user_ = sequelize.define('mission_user_', {
    mission_id: {
      type: DataTypes.BIGINT
    },
    user_id: {
      type: DataTypes.BIGINT
    },
    studentStatus: { 
      type:DataTypes.STRING
    }
  }, 
  {
    freezeTableName: true,
    timestamps: false
  });
  mission_user_.associate = function(models) {
    // associations can be defined here
    // mission_user_.hasMany(models.user_, {foreignKey: 'user_id'});
    mission_user_.belongsTo(models.mission, {foreignKey: 'mission_id'});
    mission_user_.belongsTo(models.user_, {foreignKey: 'user_id'});
  };
  return mission_user_;
};