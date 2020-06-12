'use strict';
module.exports = (sequelize, DataTypes) => {
  const instructionalresourceunit = sequelize.define('instructionalresourceunit', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true
    },
    percentage: {
      type: DataTypes.FLOAT
    },
    enabled: {
      type: DataTypes.INTEGER
    },
    resource_unit_order: {
      type: DataTypes.INTEGER
    },
    resource_id: {
      type: DataTypes.BIGINT
    },
    instructionalResourceSequence_id: {
      type: DataTypes.BIGINT
    },
    resource_type: {
      type: DataTypes.STRING
    }
  }, 
  {
    freezeTableName: true,
    timestamps: false
  });
  instructionalresourceunit.associate = function(models) {
    // associations can be defined here
    instructionalresourceunit.belongsTo(models.instructionalresourcesequence, {foreignKey: 'instructionalResourceSequence_id'});
    instructionalresourceunit.hasMany(models.instructionalresourcesequencinghistoric, {foreignKey: 'currentResourceUnit_id'});
    instructionalresourceunit.hasMany(models.instructionalresourceunithistoric, {foreignKey: 'resourceUnit_id'});
  };
  return instructionalresourceunit;
};