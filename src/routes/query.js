const express = require('express');
const queryController = require('../controllers/query');

const router = express.Router();

router.get('/spoonacular', queryController.spoonacular);

router.get('/allrecipes', queryController.allRecipes);

module.exports = router;
