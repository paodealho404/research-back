'use strict';
module.exports = (sequelize, DataTypes) => {
  const instructionalresourcesequence = sequelize.define('instructionalresourcesequence', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true
    },
    number_of_resources: {
      type: DataTypes.INTEGER
    },
    percentage: {
      type: DataTypes.FLOAT
    },
    statement: {
      type: DataTypes.STRING
    },
    enabled: {
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
  instructionalresourcesequence.associate = function(models) {
    // associations can be defined here
    instructionalresourcesequence.belongsTo(models.curriculum, {foreignKey: 'curriculum_id'});
    instructionalresourcesequence.hasMany(models.instructionalresourceunit, {foreignKey: 'instructionalResourceSequence_id'});
    instructionalresourcesequence.hasMany(models.instructionalresourcesequencinghistoric, {foreignKey: 'resourceSequence_id'});
  };
  return instructionalresourcesequence;
};