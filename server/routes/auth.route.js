const express = require('express')
const router = express.Router();
const authController = require('../controllers/auth.controller');
const checkTokenMiddleware = require('../middleware/check');


// Register a user
router.post('/register', authController.register);


// login
router.post('/login', authController.login);

// // dashboard
// router.get('/dashboard', authController.dashboard);

router.get('/dashboard', checkTokenMiddleware, (req, res) => {
    res.status(200).json({ message: 'Tableau de bord affiché' });
});


module.exports = router;


// $2b$08$cwZkk2Aqt.XysLPYLiI/OuM3UWrCL4mbjAwEpKdts.h7OOqQvrPSK