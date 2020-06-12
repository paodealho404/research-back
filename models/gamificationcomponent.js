'use strict';
module.exports = (sequelize, DataTypes) => {
  const gamificationcomponent = sequelize.define('gamificationcomponent', {
    id: {
      type:DataTypes.BIGINT,
      primaryKey:true
    },
    name: { 
      type:DataTypes.STRING 
    },
    level_id: {
      type:DataTypes.BIGINT
    },
    level_: {
      type:DataTypes.INTEGER
    },
    points: {
      type:DataTypes.INTEGER
    },
    desiredPoints: {
      type:DataTypes.INTEGER
    }
  }, 
  {
    freezeTableName: true,
    timestamps: false
  });
  gamificationcomponent.associate = function(models) {
    // associations can be defined here
    gamificationcomponent.hasMany(models.studentgamificationinformation, { foreignKey: 'currentLevel_id' });
  };
  return gamificationcomponent;
};