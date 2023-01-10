import {AnalyzedInstruction, ExtendedIngredient, IRecipe} from "./models";

export interface ISearchResponse  {
    id: number;
    title: string;
    image: string;
    imageType: string;
    vegetarian: boolean;
    vegan: boolean;
    glutenFree: boolean;
    dairyFree: boolean;
    veryHealthy: boolean;
    cheap: boolean;
    veryPopular: boolean;
    sustainable: boolean;
    lowFodmap: boolean;
    weightWatcherSmartPoints: number;
    gaps: string;
    preparationMinutes: number;
    cookingMinutes: number;
    aggregateLikes: number;
    healthScore: number;
    creditsText: string;
    license: string;
    sourceName: string;
    pricePerServing: number;
    extendedIngredients: ExtendedIngredient[];
    readyInMinutes: number;
    servings: number;
    sourceUrl: string;
    summary: string;
    cuisines: any[];
    dishTypes: string[];
    diets: string[];
    occasions: string[];
    instructions: string;
    analyzedInstructions: AnalyzedInstruction[];
    originalId?: any;
    spoonacularSourceUrl: string;


}

export interface ISearch  {
    results: ISearchResponse[];
    offset: number;
    number: number;
    totalResults: number;
}