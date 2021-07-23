const express = require('express');
const userController = require('../controllers/user.js');

const router = express.Router();

router.post('/login', userController.attemptLogin);

router.patch('/favorite-recipe', userController.addFavoriteRecipe);

module.exports = router;
