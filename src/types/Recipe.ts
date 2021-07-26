import { Ingredient } from './Ingredient';

// I don't entirely know what the API is going to give me back yet so this needs to be fleshed out more in the future
export class Recipe {
  name: string;
  description: string;
  image: string;
  ingredients: Ingredient[];
  missingIngredients: number;
  instructions: String[];

  constructor(name: string, ingredients: Ingredient[], image: string, description: string, missingIngredients: number, instructions: String[]) {
    this.name = name;
    this.ingredients = ingredients;
    this.description = description;
    this.image = image;
    this.missingIngredients = missingIngredients;
    this.instructions = instructions;
  }

}