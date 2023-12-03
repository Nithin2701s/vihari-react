const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth')
router.post('/login',authController.verifyUser);
router.post('/signup',authController.createUser);
module.exports = router;