const controllers = {}

'use strict';
const model = require('../models/index');
const models = require('../models');
const participants = models.participant;
const survey = models.survey;

controllers.createParticipant = (req, res) => {
  const gender = req.body.gender.toString(); age = req.body.age.toString(), 
  educational_level = req.body.educational_level.toString(),  state = req.body.state.toString(),
  technical_level = req.body.technical_level.toString(), favorite_dashboard = req.body.favorite_dashboard;
  // console.log(gender,age,educational_level,state);
  participants.create({
    gender:gender,
    age:age,
    educational_level:educational_level,
    state:state,
    technical_level: technical_level,
    favorite_dashboard: favorite_dashboard
  })
  .then(function(data){
    res.status(200).json(data);
    return data;
  })
  .catch(error => {
    return error;
  })
}
controllers.createSurvey = (req,res) =>{
  const id = req.body.participant_id;
  const q1 = req.body.q1.toString(),q2 = req.body.q2.toString(),q3 = req.body.q3.toString(),q4 = req.body.q4.toString(),q5 = req.body.q5.toString(),q6 = req.body.q6.toString(),
  q7 = req.body.q7.toString(),q8 = req.body.q8.toString(),  q9 = req.body.q9.toString(), openQuestion1 = req.body.openQuestion1.toString(),
  openQuestion2 = req.body.openQuestion2.toString(), survey_type = req.body.survey_type;
  // console.log(id,q1,q2,q3,q4,q5,q6,q7,q8,q9,openQuestion1, openQuestion2, survey_type);
  survey.create({
    participant_id:id,
    q1:q1,
    q2:q2,
    q3:q3,
    q4:q4,
    q5:q5,
    q6:q6,
    q7:q7,
    q8:q8,
    q9:q9,
    openQuestion1:openQuestion1,
    openQuestion2:openQuestion2,
    survey_type:survey_type
  })
  .then((data)=>{
    res.status(200).json({ message: 'Successfully added a new survey' });
    return data;
  })
  .catch(error=>{
    return error;
  })
}
controllers.getParticipants = (req,res) =>{
  model.sequelize.query('SELECT COUNT(*) AS count FROM participant;',
  {type: model.sequelize.QueryTypes.SELECT})
  .then(function(data){
    res.json(data);
  })
  .catch(error=>{
    return error;
  })
}
controllers.getSurveys = (req,res) =>{
  model.sequelize.query('SELECT COUNT(*) AS total_surveys FROM survey;',
  {type: model.sequelize.QueryTypes.SELECT})
  .then(data=>{
    res.status(200).json(data);
  })
  .catch(error=>{
    return error;
  })
}
controllers.getClassroom = (req, res) => {
  const teacherId = req.params.teacherId;
  const courseId = req.params.courseId;
  model.sequelize.query('SELECT classroom.id, classroom.name, classroom.shift FROM classroom JOIN teacherenrollment ON teacherenrollment.classroom_id = classroom.id  AND teacherenrollment.teacher_id = 345 AND classroom.enabled = 1 JOIN course ON  teacherenrollment.course_id = course.id AND course.id = 32 WHERE classroom.enabled = 1 AND classroom.id = 7;',
  { replacements: { courseId:courseId, teacherId:teacherId },  type: model.sequelize.QueryTypes.SELECT })
  .then(function(data){
    res.json(data);
  })
  .catch(error =>{
    return error;
  })
}

controllers.getCurriculum = (req, res) => {
  const courseId = req.params.courseId;
  const classroomId = req.params.classroomId;
  model.sequelize.query('SELECT curriculum.name, curriculum.id FROM curriculum JOIN domain_ ON domain_.id = curriculum.domain_id AND curriculum.enabled = true JOIN course_domain_ ON domain_.id = course_domain_.domains_id JOIN course ON course_domain_.Course_id = course.id AND course.id= :courseId JOIN grade ON course.grade_id = grade.id JOIN classroom ON classroom.grade_id = grade.id AND classroom.id = :classroomId WHERE curriculum.id = 97 OR curriculum.id = 98 OR curriculum.id = 100 OR curriculum.id = 101;',
  { replacements: { courseId:courseId, classroomId:classroomId },  type: model.sequelize.QueryTypes.SELECT })
  .then(function(data){
    res.json(data);
  })
  .catch(error =>{
    return error;
  })
}

controllers.getStudents = (req, res) => {
  const  courseId = req.params.courseId;
  const classroomId = req.params.classroomId;
  model.sequelize.query('SELECT user_.name, user_.surname, user_.id FROM user_ JOIN studentenrollment ON user_.id = studentenrollment.student_id AND studentenrollment.enabled = true AND user_.enabled = true JOIN classroom ON studentenrollment.classroom_id = classroom.id AND classroom.id = :classroomId JOIN grade ON grade.id = classroom.grade_id JOIN course ON grade.id = course.grade_id  AND course.id = :courseId;',
  { replacements: { courseId:courseId, classroomId:classroomId },  type: model.sequelize.QueryTypes.SELECT })
  .then(function(data){
    res.json(data);
  })
  .catch(error =>{
    return error;
  })
}

controllers.totalStudents= (req, res) => {
  const  courseId = req.params.courseId;
  const classroomId = req.params.classroomId;
  model.sequelize.query('SELECT COUNT(user_.id) AS count FROM user_ JOIN studentenrollment ON user_.id = studentenrollment.student_id  JOIN classroom ON studentenrollment.classroom_id = classroom.id JOIN grade ON grade.id = classroom.grade_id JOIN course ON grade.id = course.grade_id  WHERE classroom.id = :classroomId AND course.id = :courseId AND studentenrollment.enabled = true AND user_.enabled = true;', { replacements: { classroomId:classroomId,  courseId:courseId },  type: model.sequelize.QueryTypes.SELECT })
  .then(function(data){
    res.json(data);
  })
  .catch(error =>{
    return error;
  })
} 

controllers.getStudentesLevel = (req, res) => {
  const classroomId = req.params.classroomId;
  model.sequelize.query('SELECT user_.name, gamificationcomponent.level_, studentgamificationinformation.currentPoints FROM gamificationcomponent JOIN studentgamificationinformation ON gamificationcomponent.id = studentgamificationinformation.currentLevel_id JOIN user_ ON studentgamificationinformation.user_id = user_.id JOIN studentenrollment ON user_.id = studentenrollment.student_id AND studentenrollment.enabled = 1 JOIN classroom ON studentenrollment.classroom_id = classroom.id AND classroom.id = :classroomId;', 
  { replacements: { classroomId:classroomId },  type: model.sequelize.QueryTypes.SELECT })
  .then(function(data){
    res.json(data);
  })
  .catch(error =>{
    return error;
  })
}

controllers.getStudentesByLevel = (req, res) => {
  const classroomId = req.params.classroomId;
  model.sequelize.query('SELECT gamificationcomponent.level_, COUNT(gamificationcomponent.level_) as quant FROM gamificationcomponent JOIN studentgamificationinformation ON gamificationcomponent.id = studentgamificationinformation.currentLevel_id JOIN user_ ON studentgamificationinformation.user_id = user_.id JOIN studentenrollment ON user_.id = studentenrollment.student_id AND studentenrollment.classroom_id = :classroomId AND studentenrollment.enabled = 1 GROUP BY gamificationcomponent.level_;', 
  { replacements: { classroomId:classroomId },  type: model.sequelize.QueryTypes.SELECT })
  .then(function(data){
    res.json(data);
  })
  .catch(error =>{
    return error;
  })
}

controllers.getNameStudentsByLevel = (req, res) => {
  const classroomId = req.params.classroomId;
  const level = req.params.level;
  model.sequelize.query('SELECT user_.id, user_.name, gamificationcomponent.level_, studentgamificationinformation.currentPoints FROM gamificationcomponent JOIN studentgamificationinformation ON gamificationcomponent.id = studentgamificationinformation.currentLevel_id AND gamificationcomponent.level_ = :level JOIN user_ ON studentgamificationinformation.user_id = user_.id  JOIN studentenrollment ON user_.id = studentenrollment.student_id AND studentenrollment.enabled = 1 JOIN classroom ON studentenrollment.classroom_id = classroom.id AND classroom.id = :classroomId;', 
  { replacements: { level:level, classroomId:classroomId },  type: model.sequelize.QueryTypes.SELECT })
  .then(function(data){
    res.json(data);
  })
  .catch(error =>{
    return error;
  })
}

controllers.getExpectedDate = (req, res) => {
  const curriculumId = req.params.curriculumId;
  const classroomId = req.params.classroomId;
  const courseId = req.params.courseId;
  model.sequelize.query('SELECT CAST(classcurriculumplan.startDate as date) startDate, CAST(classcurriculumplan.endDate as date) endDate FROM curriculum JOIN classcurriculumplan ON curriculum.id = classcurriculumplan.curriculum_id JOIN classpedagogicalplan ON classpedagogicalplan.classroom_id = :classroomId and classpedagogicalplan.course_id = :courseId WHERE curriculum.id = :curriculumId ORDER BY CAST(classcurriculumplan.updateDate as date) desc LIMIT 1;', 
  { replacements: { curriculumId:curriculumId, classroomId:classroomId, courseId:courseId },  
  type: model.sequelize.QueryTypes.SELECT })
  .then(function(data){
    res.json(data);
  })
  .catch(error =>{
    return error;
  })
}

controllers.getStudentGamification = (req, res) => {
  const userId = req.params.userId;
  model.sequelize.query('SELECT user_.name, user_.email, studentgamificationinformation.currentPoints, gamificationcomponent.level_ FROM user_ JOIN studentgamificationinformation ON user_.id = studentgamificationinformation.user_id AND user_id = :userId JOIN gamificationcomponent ON gamificationcomponent.id = studentgamificationinformation.currentLevel_id;', 
  { replacements: { userId:userId },  type: model.sequelize.QueryTypes.SELECT })
  .then(function(data){
    res.json(data);
  })
  .catch(error =>{
    return error;
  })
}

controllers.getStudentsInteractionResources = (req, res) => {
  const curriculumId = req.params.curriculumId;
  const classroomId = req.params.classroomId;
  model.sequelize.query('SELECT user_.name, user_.id, instructionalresourceunithistoric.completed, instructionalresourceunit.resource_type,  instructionalresourceunit.resource_id, instructionalresourcesequence.statement FROM classroom  JOIN studentenrollment ON studentenrollment.classroom_id = classroom.id AND classroom.id = :classroomId JOIN user_ ON user_.id = studentenrollment.student_id JOIN instructionalresourcesequencinghistoric ON instructionalresourcesequencinghistoric.user_id = user_.id JOIN instructionalresourceunithistoric ON instructionalresourcesequencinghistoric.id = instructionalresourceunithistoric.resourceSequencingHistoric_id JOIN instructionalresourceunit  ON instructionalresourceunithistoric.resourceUnit_id = instructionalresourceunit.id JOIN instructionalresourcesequence  ON  instructionalresourceunit.instructionalResourceSequence_id = instructionalresourcesequence.id AND instructionalresourcesequence.curriculum_id = :curriculumId AND instructionalresourcesequence.enabled = 1;', 
  { replacements: { curriculumId:curriculumId, classroomId:classroomId },  type: model.sequelize.QueryTypes.SELECT })
  .then(function(data){
    res.json(data);
  })
  .catch(error =>{
    return error;
  })
}

controllers.getResourcesByCurriculum = (req, res) => {
  const curriculumId = req.params.curriculumId;
  model.sequelize.query('SELECT instructionalresourceunit.resource_id, instructionalresourceunit.resource_type, resource.title as titleResources, resource.clean_statement as titleProblems FROM resource JOIN instructionalresourcesequence ON instructionalresourcesequence.curriculum_id = :curriculumId JOIN instructionalresourceunit  ON instructionalresourceunit.instructionalResourceSequence_id = instructionalresourcesequence.id AND instructionalresourceunit.resource_id = resource.id AND instructionalresourceunit.enabled = 1 ORDER BY instructionalresourceunit.resource_unit_order asc;', 
  { replacements: { curriculumId:curriculumId },  type: model.sequelize.QueryTypes.SELECT })
  .then(function(data){
    res.json(data);
  })
  .catch(error =>{
    return error;
  })
}

controllers.getStudentInteractionResources = (req, res) => {
  const curriculumId = req.params.curriculumId;
  const userId = req.params.userId;
  model.sequelize.query('SELECT instructionalresourcesequencinghistoric.completed, instructionalresourceunit.resource_type, instructionalresourceunit.resource_id FROM instructionalresourceunit JOIN instructionalresourceunithistoric ON instructionalresourceunit.id = instructionalresourceunithistoric.resourceUnit_id JOIN instructionalresourcesequencinghistoric  ON instructionalresourcesequencinghistoric.id = instructionalresourceunithistoric.resourceSequencingHistoric_id AND instructionalresourcesequencinghistoric.user_id = :userId JOIN instructionalresourcesequence ON instructionalresourcesequencinghistoric.resourceSequence_id = instructionalresourcesequence.id JOIN curriculum ON instructionalresourcesequence.curriculum_id = curriculum.id  AND curriculum.id = :curriculumId ORDER BY instructionalresourceunit.resource_unit_order asc;', 
  { replacements: { curriculumId:curriculumId, userId:userId },  type: model.sequelize.QueryTypes.SELECT })
  .then(function(data){
    res.json(data);
  })
  .catch(error =>{
    return error;
  })
}

controllers.getMinimumPercentage = (req, res) => {
  const curriculumId = req.params.curriculumId;
  model.sequelize.query('SELECT instructionalresourcesequence.percentage, instructionalresourcesequence.number_of_resources FROM instructionalresourcesequence WHERE instructionalresourcesequence.curriculum_id = :curriculumId AND instructionalresourcesequence.enabled = 1;', 
  { replacements: { curriculumId:curriculumId },  type: model.sequelize.QueryTypes.SELECT })
  .then(function(data){
    res.json(data);
  })
  .catch(error =>{
    return error;
  })
}

controllers.getQuantStudentInteractionResources = (req, res) => {
  const classroomId = req.params.classroomId
  const curriculumId = req.params.curriculumId;
  model.sequelize.query('SELECT COUNT(instructionalresourceunithistoric.resourceUnit_id) as quant, instructionalresourceunit.resource_id, instructionalresourceunit.resource_type FROM classroom  JOIN studentenrollment ON studentenrollment.classroom_id = classroom.id AND classroom.id = :classroomId JOIN user_ ON user_.id = studentenrollment.student_id JOIN instructionalresourcesequencinghistoric ON instructionalresourcesequencinghistoric.user_id = user_.id JOIN instructionalresourceunithistoric ON instructionalresourcesequencinghistoric.id = instructionalresourceunithistoric.resourceSequencingHistoric_id JOIN instructionalresourceunit  ON instructionalresourceunithistoric.resourceUnit_id = instructionalresourceunit.id JOIN instructionalresourcesequence ON  instructionalresourceunit.instructionalResourceSequence_id = instructionalresourcesequence.id AND instructionalresourcesequence.curriculum_id = :curriculumId AND instructionalresourcesequence.enabled = 1 GROUP BY instructionalresourceunithistoric.resourceUnit_id;', 
  { replacements: { classroomId:classroomId, curriculumId:curriculumId },  type: model.sequelize.QueryTypes.SELECT })
  .then(function(data){
    res.json(data);
  })
  .catch(error =>{
    return error;
  })
}

controllers.getStudentsReachedPercentage = (req,res) => {
  const classroomId = req.params.classroomId
  const curriculumId = req.params.curriculumId;
  model.sequelize.query('SELECT instructionalresourcesequencinghistoric.user_id, user_.name, instructionalresourcesequence.percentage minimumPercentage, (COUNT(instructionalresourceunithistoric.answeredAt)/instructionalresourcesequence.number_of_resources)*100 percentageReached FROM classroom JOIN studentenrollment ON studentenrollment.classroom_id = classroom.id AND classroom.id = :classroomId JOIN user_ ON user_.id = studentenrollment.student_id JOIN instructionalresourcesequencinghistoric  ON instructionalresourcesequencinghistoric.user_id = user_.id JOIN instructionalresourceunithistoric  ON instructionalresourceunithistoric.resourceSequencingHistoric_id = instructionalresourcesequencinghistoric.id AND instructionalresourceunithistoric.completed = 1 JOIN instructionalresourceunit ON instructionalresourceunit.id = instructionalresourceunithistoric.resourceUnit_id JOIN instructionalresourcesequence ON instructionalresourcesequence.id = instructionalresourceunit.instructionalResourceSequence_id AND instructionalresourcesequence.curriculum_id = :curriculumId AND instructionalresourcesequence.enabled = 1 GROUP BY instructionalresourcesequencinghistoric.user_id, instructionalresourcesequence.number_of_resources, instructionalresourcesequence.curriculum_id, instructionalresourcesequence.percentage HAVING percentageReached > minimumPercentage;', 
  { replacements: { classroomId:classroomId, curriculumId:curriculumId },  
  type: model.sequelize.QueryTypes.SELECT })
  .then(function(data){
    res.json(data);
  })
  .catch(error =>{
    return error;
  })
}

controllers.getNumbersStudentsReachedPercentage = (req,res) => {
  const classroomId = req.params.classroomId
  const curriculumId = req.params.curriculumId;
  model.sequelize.query('SELECT COUNT(*) quant FROM (SELECT instructionalresourcesequencinghistoric.user_id, user_.name,  instructionalresourcesequence.percentage minimumPercentage, (COUNT(instructionalresourceunithistoric.answeredAt)/instructionalresourcesequence.number_of_resources)*100 percentageReached FROM classroom JOIN studentenrollment ON studentenrollment.classroom_id = classroom.id AND classroom.id = :classroomId JOIN user_ ON user_.id = studentenrollment.student_id JOIN instructionalresourcesequencinghistoric ON instructionalresourcesequencinghistoric.user_id = user_.id JOIN instructionalresourceunithistoric  ON instructionalresourceunithistoric.resourceSequencingHistoric_id = instructionalresourcesequencinghistoric.id AND instructionalresourceunithistoric.completed = 1 JOIN instructionalresourceunit ON instructionalresourceunit.id = instructionalresourceunithistoric.resourceUnit_id JOIN instructionalresourcesequence  ON instructionalresourcesequence.id = instructionalresourceunit.instructionalResourceSequence_id AND instructionalresourcesequence.curriculum_id = :curriculumId AND instructionalresourcesequence.enabled = 1 GROUP BY instructionalresourcesequencinghistoric.user_id, instructionalresourcesequence.number_of_resources, instructionalresourcesequence.curriculum_id, instructionalresourcesequence.percentage HAVING percentageReached > minimumPercentage) NewTable;', 
  { replacements: { classroomId:classroomId, curriculumId:curriculumId },  
  type: model.sequelize.QueryTypes.SELECT })
  .then(function(data){
    res.json(data);
  })
  .catch(error =>{
    return error;
  })
}

controllers.getClassAveragePercentage = (req, res) => {
  const courseId = req.params.courseId
  const classroomId = req.params.classroomId
  const curriculumId = req.params.curriculumId;
  model.sequelize.query('SELECT FLOOR(Table1.totalClassResult/Table2.totalStudents) classAverage FROM (SELECT ((COUNT(instructionalresourceunithistoric.answeredAt)/instructionalresourcesequence.number_of_resources)*100) totalClassResult FROM classroom JOIN studentenrollment ON studentenrollment.classroom_id = classroom.id AND classroom.id = :classroomId AND studentenrollment.enabled = 1 JOIN user_ ON user_.id = studentenrollment.student_id JOIN instructionalresourcesequencinghistoric ON instructionalresourcesequencinghistoric.user_id = user_.id JOIN instructionalresourcesequence ON instructionalresourcesequence.id = instructionalresourcesequencinghistoric.resourceSequence_id AND instructionalresourcesequence.curriculum_id = :curriculumId AND instructionalresourcesequence.enabled = 1 JOIN instructionalresourceunithistoric ON instructionalresourceunithistoric.resourceSequencingHistoric_id = instructionalresourcesequencinghistoric.id GROUP BY instructionalresourcesequence.curriculum_id, instructionalresourcesequence.number_of_resources) Table1 JOIN (SELECT COUNT(user_.id) totalStudents FROM user_ JOIN studentenrollment ON user_.id = studentenrollment.student_id  JOIN classroom ON studentenrollment.classroom_id = classroom.id JOIN grade ON grade.id = classroom.grade_id JOIN course ON grade.id = course.grade_id  WHERE classroom.id = :classroomId AND course.id = :courseId AND studentenrollment.enabled = true AND user_.enabled = true) Table2 ON 1 = 1;', 
  { replacements: { courseId:courseId, classroomId:classroomId, curriculumId:curriculumId },  
  type: model.sequelize.QueryTypes.SELECT })
  .then(function(data){
    res.json(data);
  })
  .catch(error =>{
    return error;
  })
}

controllers.getCumulativeStudentAverage = (req, res) => {
  const userId = req.params.userId
  const classroomId = req.params.classroomId
  const curriculumId = req.params.curriculumId;
  model.sequelize.query('SELECT Table1.DATE, Table1.percentage, (@sum := @sum + FLOOR(Table1.percentage)) cumulativeAverage FROM (SELECT  CAST(instructionalresourceunithistoric.answeredAt as date) as DATE, FLOOR((COUNT(instructionalresourceunithistoric.answeredAt)/instructionalresourcesequence.number_of_resources)*100) percentage FROM classroom JOIN studentenrollment ON studentenrollment.classroom_id = classroom.id AND classroom.id = :classroomId AND studentenrollment.enabled = 1 JOIN user_ ON user_.id = studentenrollment.student_id AND user_.id = :userId JOIN instructionalresourcesequencinghistoric  ON instructionalresourcesequencinghistoric.user_id = user_.id JOIN instructionalresourcesequence  ON instructionalresourcesequence.id = instructionalresourcesequencinghistoric.resourceSequence_id AND instructionalresourcesequence.curriculum_id = :curriculumId AND instructionalresourcesequence.enabled = 1 JOIN instructionalresourceunithistoric  ON instructionalresourceunithistoric.resourceSequencingHistoric_id = instructionalresourcesequencinghistoric.id GROUP BY DATE, percentage, instructionalresourcesequence.curriculum_id, instructionalresourcesequence.number_of_resources) Table1 CROSS JOIN (select @sum := 0) params GROUP BY Table1.percentage, Table1.DATE  ORDER BY Table1.DATE;', 
  { replacements: { userId:userId, classroomId:classroomId, curriculumId:curriculumId },  
  type: model.sequelize.QueryTypes.SELECT })
  .then(function(data){
    res.json(data);
  })
  .catch(error =>{
    return error;
  })
}

controllers.getCumulativeClassAverage = (req, res) => {
  const courseId = req.params.courseId
  const classroomId = req.params.classroomId
  const curriculumId = req.params.curriculumId;
  model.sequelize.query('SELECT Table3.DATE, Table3.dailyClassAverage, (@sum := @sum + Table3.dailyClassAverage) cumulativeAverage  FROM (SELECT Table1.DATE as DATE, substring(Table1.percentage/Table2.totalStudents, 1,4) dailyClassAverage FROM (SELECT cast(instructionalresourceunithistoric.answeredAt as date) as DATE, instructionalresourcesequence.number_of_resources,  (COUNT(instructionalresourceunithistoric.answeredAt)/instructionalresourcesequence.number_of_resources)*100 percentage FROM classroom JOIN studentenrollment ON studentenrollment.classroom_id = classroom.id AND classroom.id = :classroomId AND studentenrollment.enabled = 1 JOIN user_ ON user_.id = studentenrollment.student_id  JOIN instructionalresourcesequencinghistoric  ON instructionalresourcesequencinghistoric.user_id = user_.id  JOIN instructionalresourcesequence  ON instructionalresourcesequence.id = instructionalresourcesequencinghistoric.resourceSequence_id AND instructionalresourcesequence.curriculum_id = :curriculumId AND instructionalresourcesequence.enabled = 1 JOIN instructionalresourceunithistoric  ON instructionalresourceunithistoric.resourceSequencingHistoric_id = instructionalresourcesequencinghistoric.id GROUP BY  DATE, percentage, instructionalresourcesequence.curriculum_id, instructionalresourcesequence.number_of_resources) Table1  JOIN (SELECT COUNT(user_.id) totalStudents FROM user_ JOIN studentenrollment ON user_.id = studentenrollment.student_id  JOIN classroom ON studentenrollment.classroom_id = classroom.id JOIN grade ON grade.id = classroom.grade_id JOIN course ON grade.id = course.grade_id  WHERE classroom.id = :classroomId AND course.id = :courseId AND studentenrollment.enabled = true AND user_.enabled = true) Table2 ON 1 = 1) Table3 CROSS JOIN (select @sum := 0) params ORDER BY Table3.DATE;', 
  { replacements: { courseId:courseId, classroomId:classroomId, curriculumId:curriculumId },  
  type: model.sequelize.QueryTypes.SELECT })
  .then(function(data){
    res.json(data);
  })
  .catch(error =>{
    return error;
  })
}

controllers.getFirstLastStudentInteraction = (req, res) => {
  const userId = req.params.userId
  const classroomId = req.params.classroomId
  const curriculumId = req.params.curriculumId;
  model.sequelize.query('SELECT (SELECT  CAST(instructionalresourceunithistoric.answeredAt as date) as DATE FROM classroom JOIN studentenrollment ON studentenrollment.classroom_id = classroom.id AND classroom.id = :classroomId AND studentenrollment.enabled = 1 JOIN user_ ON user_.id = studentenrollment.student_id AND user_.id = :userId JOIN instructionalresourcesequencinghistoric  ON instructionalresourcesequencinghistoric.user_id = user_.id JOIN instructionalresourcesequence  ON instructionalresourcesequence.id = instructionalresourcesequencinghistoric.resourceSequence_id AND instructionalresourcesequence.curriculum_id = :curriculumId AND instructionalresourcesequence.enabled = 1 JOIN instructionalresourceunithistoric  ON instructionalresourceunithistoric.resourceSequencingHistoric_id = instructionalresourcesequencinghistoric.id GROUP BY DATE, percentage, instructionalresourcesequence.curriculum_id, instructionalresourcesequence.number_of_resources  ORDER BY DATE asc limit 1) as firstInteraction, (SELECT  CAST(instructionalresourceunithistoric.answeredAt as date) as DATE FROM classroom JOIN studentenrollment ON studentenrollment.classroom_id = classroom.id AND classroom.id = :classroomId AND studentenrollment.enabled = 1 JOIN user_ ON user_.id = studentenrollment.student_id AND user_.id = :userId JOIN instructionalresourcesequencinghistoric  ON instructionalresourcesequencinghistoric.user_id = user_.id JOIN instructionalresourcesequence  ON instructionalresourcesequence.id = instructionalresourcesequencinghistoric.resourceSequence_id AND instructionalresourcesequence.curriculum_id = :curriculumId AND instructionalresourcesequence.enabled = 1 JOIN instructionalresourceunithistoric  ON instructionalresourceunithistoric.resourceSequencingHistoric_id = instructionalresourcesequencinghistoric.id GROUP BY DATE, percentage, instructionalresourcesequence.curriculum_id, instructionalresourcesequence.number_of_resources ORDER BY DATE desc limit 1) as lastInteraction;', 
  { replacements: { userId:userId, classroomId:classroomId, curriculumId:curriculumId },  
  type: model.sequelize.QueryTypes.SELECT })
  .then(function(data){
    res.json(data);
  })
  .catch(error =>{
    return error;
  })
}

controllers.getFirstLastClassInteraction = (req, res) => {
  const classroomId = req.params.classroomId
  const curriculumId = req.params.curriculumId;
  model.sequelize.query('SELECT(SELECT cast(instructionalresourceunithistoric.answeredAt as date) as DATE FROM classroom JOIN studentenrollment ON studentenrollment.classroom_id = classroom.id AND classroom.id = :classroomId AND studentenrollment.enabled = 1 JOIN user_ ON user_.id = studentenrollment.student_id  JOIN instructionalresourcesequencinghistoric  ON instructionalresourcesequencinghistoric.user_id = user_.id  JOIN instructionalresourcesequence  ON instructionalresourcesequence.id = instructionalresourcesequencinghistoric.resourceSequence_id  AND instructionalresourcesequence.curriculum_id = :curriculumId AND instructionalresourcesequence.enabled = 1 JOIN instructionalresourceunithistoric  ON instructionalresourceunithistoric.resourceSequencingHistoric_id = instructionalresourcesequencinghistoric.id GROUP BY  DATE, percentage, instructionalresourcesequence.curriculum_id, instructionalresourcesequence.number_of_resources ORDER BY DATE asc limit 1) as firstInteraction, (SELECT cast(instructionalresourceunithistoric.answeredAt as date) as DATE FROM classroom JOIN studentenrollment ON studentenrollment.classroom_id = classroom.id AND classroom.id = :classroomId AND studentenrollment.enabled = 1 JOIN user_ ON user_.id = studentenrollment.student_id JOIN instructionalresourcesequencinghistoric  ON instructionalresourcesequencinghistoric.user_id = user_.id JOIN instructionalresourcesequence  ON instructionalresourcesequence.id = instructionalresourcesequencinghistoric.resourceSequence_id AND instructionalresourcesequence.curriculum_id = :curriculumId AND instructionalresourcesequence.enabled = 1 JOIN instructionalresourceunithistoric  ON instructionalresourceunithistoric.resourceSequencingHistoric_id = instructionalresourcesequencinghistoric.id GROUP BY  DATE, percentage, instructionalresourcesequence.curriculum_id, instructionalresourcesequence.number_of_resources ORDER BY DATE desc limit 1) as lastInteraction;', 
  { replacements: { classroomId:classroomId, curriculumId:curriculumId },  
  type: model.sequelize.QueryTypes.SELECT })
  .then(function(data){
    res.json(data);
  })
  .catch(error =>{
    return error;
  })
}

controllers.getStudentStatusProblems = (req, res) => {
  const userId = req.params.userId
  const classroomId = req.params.classroomId
  const curriculumId = req.params.curriculumId;
  model.sequelize.query('SELECT problemsolvinghistoric.id, problemsolvinghistoric.correctly_done, problemsolvinghistoric.problem_id resource_id, instructionalresourceunit.resource_type, problemsolvinghistoric.user_id, topic.curriculum_id FROM classroom  JOIN studentenrollment ON studentenrollment.classroom_id = classroom.id AND classroom.id = :classroomId JOIN user_ ON user_.id = studentenrollment.student_id AND studentenrollment.enabled = true AND user_.enabled = true JOIN problemsolvinghistoric ON user_.id = problemsolvinghistoric.user_id JOIN resource ON problemsolvinghistoric.problem_id = resource.id  AND problemsolvinghistoric.user_id = :userId AND resource.enabled = 1 JOIN resource_topic ON resource.id = resource_topic.resources_id  JOIN topic ON topic.id = resource_topic.topics_id JOIN curriculum ON curriculum.id = topic.curriculum_id  AND curriculum.id = :curriculumId JOIN instructionalresourcesequence ON instructionalresourcesequence.curriculum_id = :curriculumId JOIN instructionalresourceunit  ON instructionalresourceunit.instructionalResourceSequence_id = instructionalresourcesequence.id AND instructionalresourceunit.resource_id = resource.id AND instructionalresourceunit.enabled = 1;',  
  { replacements: { userId:userId, classroomId:classroomId, curriculumId:curriculumId },  
  type: model.sequelize.QueryTypes.SELECT })
  .then(function(data){
    res.json(data);
  })
  .catch(error =>{
    return error;
  })
}

controllers.getNumberStudentsCorrectlyAnsweredProblems = (req, res) => {
  const classroomId = req.params.classroomId
  const curriculumId = req.params.curriculumId;
  model.sequelize.query('SELECT problemsolvinghistoric.problem_id, COUNT(problemsolvinghistoric.correctly_done) quantAnsweredCorrectly, problemsolvinghistoric.correctly_done FROM classroom  JOIN studentenrollment ON studentenrollment.classroom_id = classroom.id AND classroom.id = :classroomId JOIN user_ ON user_.id = studentenrollment.student_id AND studentenrollment.enabled = true AND user_.enabled = true JOIN problemsolvinghistoric ON user_.id = problemsolvinghistoric.user_id JOIN resource ON problemsolvinghistoric.problem_id = resource.id  AND resource.enabled = 1 JOIN resource_topic ON resource.id = resource_topic.resources_id JOIN topic ON topic.id = resource_topic.topics_id JOIN curriculum ON curriculum.id = topic.curriculum_id AND curriculum.id = :curriculumId JOIN instructionalresourcesequence ON instructionalresourcesequence.curriculum_id = :curriculumId JOIN instructionalresourceunit  ON instructionalresourceunit.instructionalResourceSequence_id = instructionalresourcesequence.id AND instructionalresourceunit.resource_id = resource.id AND instructionalresourceunit.enabled = 1 GROUP BY problemsolvinghistoric.problem_id,problemsolvinghistoric.correctly_done HAVING problemsolvinghistoric.correctly_done = 1;', 
  { replacements: { classroomId:classroomId, curriculumId:curriculumId },  
  type: model.sequelize.QueryTypes.SELECT })
  .then(function(data){
    res.json(data);
  })
  .catch(error =>{
    return error;
  })
}

controllers.getClassStatusProblems = (req, res) => {
  const classroomId = req.params.classroomId
  const curriculumId = req.params.curriculumId;
  model.sequelize.query('SELECT problemsolvinghistoric.user_id, problemsolvinghistoric.problem_id, problemsolvinghistoric.correctly_done, topic.curriculum_id FROM classroom  JOIN studentenrollment ON studentenrollment.classroom_id = classroom.id AND classroom.id = :classroomId JOIN user_ ON user_.id = studentenrollment.student_id AND studentenrollment.enabled = true AND user_.enabled = true JOIN problemsolvinghistoric ON user_.id = problemsolvinghistoric.user_id JOIN resource ON problemsolvinghistoric.problem_id = resource.id  AND resource.enabled = 1 JOIN resource_topic ON resource.id = resource_topic.resources_id JOIN topic ON topic.id = resource_topic.topics_id JOIN curriculum ON curriculum.id = topic.curriculum_id AND curriculum.id = :curriculumId JOIN instructionalresourcesequence ON instructionalresourcesequence.curriculum_id = :curriculumId JOIN instructionalresourceunit  ON instructionalresourceunit.instructionalResourceSequence_id = instructionalresourcesequence.id AND instructionalresourceunit.resource_id = resource.id AND instructionalresourceunit.enabled = 1;', 
  { replacements: { classroomId:classroomId, curriculumId:curriculumId },  
  type: model.sequelize.QueryTypes.SELECT })
  .then(function(data){
    res.json(data);
  })
  .catch(error =>{
    return error;
  })
}

controllers.getMissionInfo = (req, res) => {
  const courseId = req.params.courseId
  const classroomId = req.params.classroomId
  const curriculumId = req.params.curriculumId;
  model.sequelize.query('SELECT COUNT(user_.id) totalStudents, mission.ID, mission.nameMission, mission.awardPoints, mission.awardGrade, CAST(mission.startDate as date) as startDate,  CAST(mission.endDate as date) as endDate FROM user_ JOIN mission_user_ ON user_.id = mission_user_.user_id JOIN mission ON mission_user_.mission_id = mission.id JOIN curriculum ON mission.curriculumId = curriculum.id AND mission.curriculumId = :curriculumId JOIN domain_ ON domain_.id = curriculum.domain_id AND curriculum.enabled = true JOIN course_domain_ ON domain_.id = course_domain_.domains_id JOIN course ON course_domain_.Course_id = course.id AND course.id= :courseId JOIN grade ON course.grade_id = grade.id  JOIN classroom ON classroom.grade_id = grade.id AND classroom.id = :classroomId GROUP BY mission.ID;', 
  { replacements: { classroomId:classroomId, curriculumId:curriculumId, courseId:courseId },  
  type: model.sequelize.QueryTypes.SELECT })
  .then(function(data){
    res.json(data);
  })
  .catch(error =>{
    return error;
  })
}

controllers.getClassMissionStatus = (req, res) => {
  const courseId = req.params.courseId
  const classroomId = req.params.classroomId
  const curriculumId = req.params.curriculumId;
  model.sequelize.query('SELECT mission.ID as missionId, mission.nameMission, mission_user_.studentStatus, COUNT(user_.id) totalStudents FROM user_ JOIN mission_user_ ON user_.id = mission_user_.user_id  JOIN mission ON mission_user_.mission_id = mission.id  JOIN curriculum ON mission.curriculumId = curriculum.id AND mission.curriculumId = :curriculumId JOIN domain_ ON domain_.id = curriculum.domain_id AND curriculum.enabled = true JOIN course_domain_ ON domain_.id = course_domain_.domains_id JOIN course ON course_domain_.Course_id = course.id AND course.id= :courseId JOIN grade ON course.grade_id = grade.id  JOIN classroom ON classroom.grade_id = grade.id AND classroom.id = :classroomId GROUP BY mission_user_.studentStatus, mission.nameMission, mission.ID;', 
  { replacements: { classroomId:classroomId, curriculumId:curriculumId, courseId:courseId },  
  type: model.sequelize.QueryTypes.SELECT })
  .then(function(data){
    res.json(data);
  })
  .catch(error =>{
    return error;
  })
}

controllers.getStudentsMissionStatus = (req, res) => {
  const courseId = req.params.courseId
  const classroomId = req.params.classroomId
  const curriculumId = req.params.curriculumId
  model.sequelize.query('SELECT mission.ID as missionId, mission.nameMission, user_.id as userId, user_.name as userName, mission_user_.studentStatus FROM user_ JOIN mission_user_ ON user_.id = mission_user_.user_id JOIN mission ON mission_user_.mission_id = mission.id JOIN curriculum ON mission.curriculumId = curriculum.id AND mission.curriculumId = :curriculumId JOIN domain_ ON domain_.id = curriculum.domain_id AND curriculum.enabled = true JOIN course_domain_ ON domain_.id = course_domain_.domains_id JOIN course ON course_domain_.Course_id = course.id AND course.id= :courseId JOIN grade ON course.grade_id = grade.id  JOIN classroom ON classroom.grade_id = grade.id AND classroom.id = :classroomId GROUP BY mission_user_.studentStatus, mission.nameMission, mission.ID, user_.id;', 
  { replacements: { classroomId:classroomId, curriculumId:curriculumId, courseId:courseId },  
  type: model.sequelize.QueryTypes.SELECT })
  .then(function(data){
    res.json(data);
  })
  .catch(error =>{
    return error;
  })
}

module.exports = controllers;