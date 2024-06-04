const express = require('express')
const router = express.Router()
const {login, verifyToken} = require('../controllers/authController')
const {registerUser} = require('../controllers/userController')

router.post('/login', login);
router.post('/register', registerUser);


module.exports = router