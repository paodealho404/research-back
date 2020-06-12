const express = require('express');
const routes = express.Router();
const cors = require('cors');
routes.use(cors());

const ClassController = require('../controllers/ClassController');
const Controller = require('../controllers/Controller');

//Store participants' info
routes.post('/createParticipant', Controller.createParticipant);
//Select current number of participants
routes.get('/getParticipants', Controller.getParticipants);
//Store participants for a survey
routes.post('/createSurvey', Controller.createSurvey);
//Select current number of surveys
routes.get('/getSurveys', Controller.getSurveys);
//Select courses linked to a teacher
routes.get('/get/:id', ClassController.get);
//Select subjects from a course
routes.get('/getCurriculum/:courseId/:classroomId', Controller.getCurriculum);
//Select classrooms from a course
routes.get('/getClassroom/:teacherId/:courseId', Controller.getClassroom);
//Select the students registered in a course
routes.get('/getStudents/:courseId/:classroomId', Controller.getStudents);
//Select the total of students registered in a course
routes.get('/totalStudents/:courseId/:classroomId', Controller.totalStudents);
//Select student levels in a course
routes.get('/getStudentesLevel/:classroomId', Controller.getStudentesLevel);
//Select how many students are in each level
routes.get('/getStudentesByLevel/:classroomId', Controller.getStudentesByLevel);
//Select the students in each level
routes.get('/getNameStudentsByLevel/:classroomId/:level', Controller.getNameStudentsByLevel);
//Select expected domain date for a subject
routes.get('/getExpectedDate/:curriculumId/:courseId/:classroomId', Controller.getExpectedDate);
//Select students basic information related to gamification (e.g. points/level)
routes.get('/getStudentGamification/:userId', Controller.getStudentGamification);
//Select each student's interaction with curriculum resources (if interacted)
routes.get('/getStudentsInteractionResources/:curriculumId/:classroomId',Controller.getStudentsInteractionResources);
//Select resources linked to curriculum
routes.get('/getResourcesByCurriculum/:curriculumId', Controller.getResourcesByCurriculum);
//Select which resources on a given subject a student has completed
routes.get('/getStudentInteractionResources/:curriculumId/:userId', Controller.getStudentInteractionResources);
//Select how many students have interacted with subject resources
routes.get('/getQuantStudentInteractionResources/:classroomId/:curriculumId', Controller.getQuantStudentInteractionResources);
//Select which students reached the minimum percentage of a given subject
routes.get('/getStudentsReachedPercentage/:classroomId/:curriculumId', Controller.getStudentsReachedPercentage);
//Select the minimum percentage of a subject and number of resources related to a subject
routes.get('/getMinimumPercentage/:curriculumId', Controller.getMinimumPercentage);
//Select how many students reached the minimum percentage of a subject
routes.get('/getNumbersStudentsReachedPercentage/:classroomId/:curriculumId', Controller.getNumbersStudentsReachedPercentage);
//Select average class interaction with resources
routes.get('/getClassAveragePercentage/:courseId/:classroomId/:curriculumId', Controller.getClassAveragePercentage);
//Select cumulative average daily student interaction for a given subject
routes.get('/getCumulativeStudentAverage/:userId/:classroomId/:curriculumId', Controller.getCumulativeStudentAverage);
//Select cumulative avarage daily class interaction for a given subject
routes.get('/getCumulativeClassAverage/:courseId/:classroomId/:curriculumId', Controller.getCumulativeClassAverage);
//Student's first and last interaction with resources of a given subject
routes.get('/getFirstLastStudentInteraction/:userId/:classroomId/:curriculumId', Controller.getFirstLastStudentInteraction);
//Class's first and last interaction with resources of a given subject
routes.get('/getFirstLastClassInteraction/:classroomId/:curriculumId', Controller.getFirstLastClassInteraction);
//Status of a student in relation to the problems of a curriculum (e.g. if it was correctly done or not)
routes.get('/getStudentStatusProblems/:userId/:classroomId/:curriculumId', Controller.getStudentStatusProblems);
//Select how many students correctly answered the problems of a curriculum
routes.get('/getNumberStudentsCorrectlyAnsweredProblems/:classroomId/:curriculumId', Controller.getNumberStudentsCorrectlyAnsweredProblems);
//Select students' interaction with the problems of a particular curriculum (e.g. if they answered correctly or not).
routes.get('/getClassStatusProblems/:classroomId/:curriculumId', Controller.getClassStatusProblems);
//Select the total students to whom the mission was directed and the date the mission is planned to begin
routes.get('/getMissionInfo/:courseId/:classroomId/:curriculumId', Controller.getMissionInfo);
//Select how many students interacted successfully, did not interact successfully, and did not attempt to interact with each of the curriculum missions
routes.get('/getClassMissionStatus/:courseId/:classroomId/:curriculumId', Controller.getClassMissionStatus);
//Select which students successfully interacted, did not interact successfully, and did not attempt to interact with each of the curriculum missions
routes.get('/getStudentsMissionStatus/:courseId/:classroomId/:curriculumId', Controller.getStudentsMissionStatus);

module.exports = routes;
