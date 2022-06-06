const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');

const token = process.env.API_KEY;


// POST /api/users
router.post('/', usersCtrl.create);
// POST /api/users/login
router.post('/login', usersCtrl.login);

module.exports = router;