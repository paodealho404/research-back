'use strict';
module.exports = (sequelize, DataTypes) => {
  const mission = sequelize.define('mission', {
    ID:{
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    nameMission: {
      type: DataTypes.STRING
    },
    startDate: {
      type: DataTypes.DATE
    },
    endDate: {
      type: DataTypes.DATE
    },
    creationDate: {
      type: DataTypes.DATE
    },
    awardPoints: {
      type: DataTypes.INTEGER
    },
    awardGrade: {
      type: DataTypes.INTEGER
    },
    curriculum_id: {
      type: DataTypes.BIGINT
    }
  }, 
  {
    freezeTableName: true,
    timestamps: false
  });
  mission.associate = function(models) {
    // associations can be defined here
    mission.belongsToMany(models.user_, {through: 'mission_user_', foreignKey: 'mission_id'});
    mission.belongsTo(models.curriculum, {foreignKey: 'curriculum_id'});
  };
  return mission;
};