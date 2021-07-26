import { SpoonacularApiResponse } from "../types/SpoonacularApiResponse";
import { Recipe } from "../types/Recipe";
import { Ingredient } from "../types/Ingredient";


export const getRecipesFromQuery =	(recipeResponse: SpoonacularApiResponse[]): Recipe[] => {
	const processedRecipes: Recipe[] = recipeResponse.map(
		(unprocessedRecipe) => {
		const processedRecipe = processRecipe(unprocessedRecipe);
		return new Recipe(
			unprocessedRecipe.title,
			processedRecipe.ingredients,
			unprocessedRecipe.image,
			unprocessedRecipe.summary,
			5,
			processedRecipe.instructions
		)
		});
	return processedRecipes;
}
	
// 1) go through each recipe
// 2) in each recipe go through each step
// 3) in each step go through each ingredient
// 4) return ingredient[]
	  // TODO: ingredients should only be added if they aren't already in the ingredient list
const processRecipe = (recipe: SpoonacularApiResponse): {ingredients: Ingredient[], instructions: String[]} => {
	
	let ingredients: Ingredient[] = [];
	let instructions: String[] = [];

	if (recipe.analyzedInstructions) {
		for(let j = 0; j < recipe.analyzedInstructions.length; j++) {
			for(let k = 0; k < recipe.analyzedInstructions[j].steps.length; k++) {
				instructions.push(recipe.analyzedInstructions[j].steps[k].step);
				const ingredients = recipe.analyzedInstructions[j].steps[k].ingredients.map(ingredient => new Ingredient(ingredient.name))
				ingredients.push(...ingredients);
			}
			
		}
	}
	
	return {ingredients, instructions}
}
