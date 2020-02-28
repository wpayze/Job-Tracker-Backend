var express = require('express');
var router = express.Router();

var passport = require('passport');
require('../config/passport')(passport);

var userController = require("../controllers/userController");

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);

module.exports = router;
