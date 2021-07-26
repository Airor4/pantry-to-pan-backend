export type SpoonacularApiResponse = {
	vegetarian: boolean;
	vegan: boolean;
	glutenFree: boolean;
	dairyFree: boolean;
	veryHealthy: boolean;
	cheap: boolean;
	veryPopular: boolean;
	sustainable: boolean;
	weightWatcherSmartPoints: number;
	gaps: string;
	lowFodmap: boolean;
	preparationMinutes?: number | null;
	cookingMinutes?: number | null;
	aggregateLikes: number;
	spoonacularScore: number;
	healthScore: number;
	creditsText?: string | null;
	sourceName?: string | null;
	pricePerServing: number;
	id: number;
	title: string;
	readyInMinutes: number;
	servings: number;
	sourceUrl: string;
	image: string;
	imageType: string;
	summary: string;
	cuisines?: (string | null)[] | null;
	dishTypes?: (string)[] | null;
	diets?: (string | null)[] | null;
	occasions?: (string | null)[] | null;
	analyzedInstructions: (AnalyzedInstructionsEntity)[];
  };
  
  type AnalyzedInstructionsEntity = {
	name: string;
	steps: (StepsEntity)[];
  };
  
  type StepsEntity = {
	number: number;
	step: string;
	ingredients: (IngredientsEntityOrEquipmentEntity)[];
	equipment: (EquipmentEntity | null)[] | null;
	length?: LengthOrTemperature | null;
  };
  
  export type IngredientsEntityOrEquipmentEntity = {
	id: number;
	name: string;
	localizedName: string;
	image: string;
  };
  
  type EquipmentEntity = {
	id: number;
	name: string;
	localizedName: string;
	image: string;
	temperature?: LengthOrTemperature1 | null;
  };
  
  type LengthOrTemperature1 = {
	number: number;
	unit: string;
  };
  
  type LengthOrTemperature = {
	number: number;
	unit: string;
  };