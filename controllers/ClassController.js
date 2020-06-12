const controllers = {}

'use strict';
const models = require('../models');
const Teacher = models.teacherenrollment;
const Class = models.course;

controllers.get = (req, res) => {
  const { id } = req.params;
  Class.findAll({
    where: {enabled : true},
    where: {grade_id: 2},
    where: {school_id: 2},
    where: {id:32},
    include: [
      {
        model: Teacher,
        where: {teacher_id : 345},
        where: {classroom_id:7}
      }
    ]
  })
  .then(function(data){
    res.json(data);
  })
  .catch(error =>{
    return error;
  })
}


module.exports = controllers;

