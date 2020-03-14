const express = require('express');
const router = express.Router();

const AuthController = require('./src/controllers/AuthController');
const RegisterRequest = require('./src/requests/register-request');

router.post('/register', RegisterRequest, AuthController.register);

module.exports = router;
