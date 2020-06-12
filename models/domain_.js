'use strict';
module.exports = (sequelize, DataTypes) => {
  const domain_ = sequelize.define('domain_', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING
    },
    grade_id: {
      type: DataTypes.BIGINT
    }
  }, 
  {
    freezeTableName: true,
    timestamps: false
  });
  domain_.associate = function(models) {
    // associations can be defined here
    domain_.belongsToMany(models.course, { through: "course_domain_", foreignKey: "domains_id" });
    domain_.hasMany(models.curriculum, {foreignKey: 'domain_id'});

  };
  return domain_;
};