import {RequestHandler} from 'express';
import axios from 'axios';

import { getRecipesFromQuery } from './queryHelper';

export const spoonacular: RequestHandler = async (req, res) => {

	try {
		const response = await axios({
			method: 'get',
			url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch',
			params: {
			  includeIngredients: req.query.includeIngredients,
			  diet: req.query.diet,
			  intolerances: req.query.allergies,
			  number: '20', // return 20 by default [1,100]
			  ranking: req.query.checked, // 0 to minimize missing ingredients, 1 to maximize used ingredients
			  addRecipeInformation: true,
			  instructionsRequired: true,
			},
			headers: {
			  // @ts-ignore
			  'x-rapidapi-key': process.env.X_RAPIDAPI_KEY,
			  // @ts-ignore
			  'x-rapidapi-host': process.env.X_RAPIDAPI_HOST,
			}
		  });
		const recipes = getRecipesFromQuery(response.data.results);
		res.status(200).json(recipes);
	} catch (error) {
		console.log(error)
		res.status(500).send(error)
	}
}

export const allRecipes: RequestHandler = (req, res) => {
	res.status(200).send('all recipes api not implmented yet');
}