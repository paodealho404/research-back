'use strict';
module.exports = (sequelize, DataTypes) => {
  const resource = sequelize.define('resource', {
    id: {
      type:DataTypes.BIGINT,
      primaryKey: true
    },
    contentType: {
      type:DataTypes.STRING
    },
    title: {
      type:DataTypes.STRING
    },
    enabled: {
      type:DataTypes.INTEGER
    },
    curriculum_id: {
      type:DataTypes.BIGINT
    },
    clean_statement: {
      type:DataTypes.STRING
    }
  }, 
  {
    freezeTableName: true,
    timestamps: false
  });
  resource.associate = function(models) {
    // associations can be defined here
    resource.belongsTo(models.curriculum, {foreignKey: 'curriculum_id'});
  };
  return resource;
};