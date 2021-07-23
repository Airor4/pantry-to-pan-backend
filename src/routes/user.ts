import express from 'express';
import * as userController from '../controllers/user';

const router = express.Router();

router.post('/login', userController.attemptLogin);

router.patch('/favorite-recipe', userController.addFavoriteRecipe);

export default router;
