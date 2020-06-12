'use strict';

module.exports = (sequelize, DataTypes) => {
  const instructionalresourceunithistoric = sequelize.define('instructionalresourceunithistoric', {
    id: {
      type:DataTypes.BIGINT,
      primaryKey: true
    },
    answeredAt: {
      type: DataTypes.DATE
    },
    completed: {
      type: DataTypes.INTEGER
    },
    score: {
      type: DataTypes.FLOAT
    },
    resourceSequencingHistoric_id: {
      type: DataTypes.BIGINT
    },
    enabled: {
      type: DataTypes.INTEGER
    },
    resourceUnit_id: {
      type: DataTypes.BIGINT
    }
  }, 
  {
    freezeTableName: true,
    timestamps: false
  });
  instructionalresourceunithistoric.associate = function(models) {
    // associations can be defined here
    instructionalresourceunithistoric.belongsTo(models.instructionalresourceunit, {foreignKey: 'resourceUnit_id'});
    instructionalresourceunithistoric.belongsTo(models.instructionalresourcesequencinghistoric, {foreignKey: 'resourceSequencingHistoric_id'});
  };
  return instructionalresourceunithistoric;
};