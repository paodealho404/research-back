'use strict';
module.exports = (sequelize, DataTypes) => {
  const instructionalresourcesequencinghistoric = sequelize.define('instructionalresourcesequencinghistoric', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true
    },
    completed: {
      type: DataTypes.INTEGER
    },
    score: {
      type: DataTypes.FLOAT
    },
    enabled: {
      type: DataTypes.INTEGER
    },
    user_id: {
      type: DataTypes.BIGINT
    },
    currentResourceUnit_id: {
      type: DataTypes.BIGINT
    },
    resourceSequence_id: {
      type: DataTypes.BIGINT
    }
  }, 
  {
    freezeTableName: true,
    timestamps: false
  });
  instructionalresourcesequencinghistoric.associate = function(models) {
    // associations can be defined here
    instructionalresourcesequencinghistoric.hasMany(models.instructionalresourceunithistoric, {foreignKey: 'resourceSequencingHistoric_id'});
    instructionalresourcesequencinghistoric.belongsTo(models.instructionalresourceunit, {foreignKey: 'currentResourceUnit_id'});
    instructionalresourcesequencinghistoric.belongsTo(models.instructionalresourcesequence, {foreignKey: 'resourceSequence_id'});
    instructionalresourcesequencinghistoric.belongsTo(models.user_, {foreignKey: 'user_id'});
  };
  return instructionalresourcesequencinghistoric;
};