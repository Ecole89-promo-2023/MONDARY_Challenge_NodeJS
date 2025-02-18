const express = require('express');
const { register, login, getAllUsers, getUserById } = require('../controllers/userController');

const router = express.Router();

router.post('/new', register);
router.post('/login', login);
router.get('/', getAllUsers);
router.get('/:id', getUserById);

module.exports = router;