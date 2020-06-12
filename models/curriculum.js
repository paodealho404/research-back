'use strict';
module.exports = (sequelize, DataTypes) => {
  const curriculum = sequelize.define('curriculum', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    domain_id: {
      type: DataTypes.BIGINT
    },
    enabled: {
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING
    }
  }, 
  {
    freezeTableName: true,
    timestamps: false
  });
  curriculum.associate = function(models) {
    // associations can be defined here
    curriculum.belongsTo(models.domain_, {foreignKey: 'domain_id'});
    curriculum.hasMany(models.resource, {foreignKey: 'curriculum_id'});
    curriculum.hasMany(models.mission, {foreignKey: 'curriculum_id'});
  };
  return curriculum;
};