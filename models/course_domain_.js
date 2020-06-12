'use strict';
module.exports = (sequelize, DataTypes) => {
  const course_domain_ = sequelize.define('course_domain_', {
    Course_id: DataTypes.BIGINT,
    domains_id: DataTypes.BIGINT
  }, 
  {
    freezeTableName: true,
    timestamps: false
  });
  course_domain_.associate = function(models) {
    // associations can be defined here
    course_domain_.belongsTo(models.course);
    course_domain_.belongsTo(models.domain_);
  };
  return course_domain_;
};