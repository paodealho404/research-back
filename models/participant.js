'use strict';
module.exports = (sequelize, DataTypes) => {
  const participant = sequelize.define('participant', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    gender: DataTypes.STRING,
    age: DataTypes.STRING,
    educational_level: DataTypes.STRING,
    state: DataTypes.STRING,
    technical_level: DataTypes.STRING
  }, {
    freezeTableName: true,
    timestamps: false
  });
  participant.associate = function(models) {
    // associations can be defined here
    participant.hasMany(models.survey, {foreignKey: 'participant_id'});
  };
  return participant;
};