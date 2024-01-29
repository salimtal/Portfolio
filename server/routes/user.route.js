const express = require('express')
const router = express.Router();
const userController = require('../controllers/user.controller');



// Ajouter une connaissance 
router.post('/addconnaissance', userController.addConnaissance);

// Ajouter un projet
router.post('/addproject', userController.addProject);

// update a language 
router.put('/connaissances/:id', userController.editConnaissance);

// update a project
router.put('/projet/:id', userController.editProject);

// Delete a language
router.delete('/langage/:id', userController.deleteConnaissance);

// Delete a Project
router.delete('/project/:id', userController.deleteProject);

router.get('/getalllangage', userController.getAllLangage);

router.get('/getlangage/:id', userController.getLangage);

router.get('/getallproject', userController.getAllProject);

router.get('/getproject/:id', userController.getProject);



module.exports = router;