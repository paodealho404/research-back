'use strict';
module.exports = (sequelize, DataTypes) => {
  const studentgamificationinformation = sequelize.define('studentgamificationinformation', {
    id: {
      type:DataTypes.BIGINT,
      primaryKey:true
    },
    currentLevel_id: {
      type:DataTypes.BIGINT
    },
    user_id: {
      type:DataTypes.INTEGER
    },
    currentPoints: {
      type:DataTypes.INTEGER
    }
  }, 
  {
    freezeTableName: true,
    timestamps: false
  });
  studentgamificationinformation.associate = function(models) {
    // associations can be defined here
    studentgamificationinformation.belongsTo(models.gamificationcomponent, { foreignKey: 'currentLevel_id' });
  };
  return studentgamificationinformation;
};