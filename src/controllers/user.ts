import axios from 'axios';
import {RequestHandler} from 'express';

export const attemptLogin: RequestHandler = (req, res) => {
	res.status(200).send('Login not yet implemented');
}

export const addFavoriteRecipe: RequestHandler = (req, res) => {
	res.send('add favorite recipe not yet implemented');
}
