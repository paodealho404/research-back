'use strict';
module.exports = (sequelize, DataTypes) => {
  const course = sequelize.define('course', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING
    },
    school_id: {
      type: DataTypes.BIGINT
    },
    grade_id: {
      type: DataTypes.BIGINT
    }
  }, 
  {
    freezeTableName: true,
    timestamps: false
  });
  course.associate = function(models) {
    // associations can be defined here
    course.hasMany(models.teacherenrollment, { foreignKey: 'course_id' });
    course.belongsToMany(models.domain_, { through: "course_domain_", foreignKey: "Course_id" });
    course.belongsTo(models.grade, {foreignKey: 'grade_id'});
  };
  return course;
};