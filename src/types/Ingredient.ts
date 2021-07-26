export class Ingredient {
	private _name: string;
	// Could put in amount of ingredient
  
	constructor(name: string) {
	  this._name = name;
	}
  
	get name(): string  {
	  return this._name;
	}
  }
  