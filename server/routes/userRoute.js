const express = require('express');
const {registerUser, loginUser, updateUser, getUsers, validate} = require('../controllers/userController');

const router = express.Router();

const User = require('../database/model/UserSchema');

router.post('/validate', (req, res) => validate(req, res));

router.post('/register', (req, res) => registerUser(req, res));

router.post('/update', (req, res) => updateUser(req, res));

router.post('/login', (req,res)=>loginUser(req,res))

router.get('/', (req,res)=>getUsers(req,res))

module.exports = router;