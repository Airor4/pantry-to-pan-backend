import {RequestHandler} from 'express';
import axios from 'axios';

export const spoonacular: RequestHandler = (req, res) => {
	// first parse out the body
	// then make query to spoonacular
	// then respond with json
	res.send(req.body);
}

export const allRecipes: RequestHandler = (req, res) => {
	res.send('all recipes api not implmented yet');
}