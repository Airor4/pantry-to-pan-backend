import express from 'express';
import * as queryController from '../controllers/query';

const router = express.Router();

router.get('/spoonacular', queryController.spoonacular);

router.get('/allrecipes', queryController.allRecipes);

export default router;
