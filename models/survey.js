'use strict';
module.exports = (sequelize, DataTypes) => {
  const survey = sequelize.define('survey', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    participant_id: DataTypes.INTEGER,
    q1: DataTypes.TEXT,
    q2: DataTypes.TEXT,
    q3: DataTypes.TEXT,
    q4: DataTypes.TEXT,
    q5: DataTypes.TEXT,
    q6: DataTypes.TEXT,
    q7: DataTypes.TEXT,
    q8: DataTypes.TEXT,
    q9: DataTypes.TEXT,
    openQuestion1: DataTypes.TEXT,
    openQuestion2: DataTypes.TEXT,
    survey_type: DataTypes.INTEGER
  }, {
    freezeTableName: true,
    timestamps: false
  });
  survey.associate = function(models) {
    // associations can be defined here
    survey.belongsTo(models.participant, {foreignKey: 'participant_id'});
  };
  return survey;
};