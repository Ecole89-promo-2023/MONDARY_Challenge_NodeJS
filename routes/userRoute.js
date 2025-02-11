const express = require('express');
const { register } = require('../controllers/userController');

const router = express.Router();

router.post('/new', register);

module.exports = router;