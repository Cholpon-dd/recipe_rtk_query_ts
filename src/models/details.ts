

    export interface Detail {
        amount: number;
        unitShort: string;
        unitLong: string;
    }

    export interface Metric {
        amount: number;
        unitShort: string;
        unitLong: string;
    }

    export interface Measures {
        us: Detail;
        metric: Metric;
    }

    export interface ExtendedIngredient {
        id: number;
        aisle: string;
        image: string;
        consistency: string;
        name: string;
        nameClean: string;
        original: string;
        originalName: string;
        amount: number;
        unit: string;
        meta: string[];
        measures: Measures;
    }

    export interface ProductMatch {
        id: number;
        title: string;
        description: string;
        price: string;
        imageUrl: string;
        averageRating: number;
        ratingCount: number;
        score: number;
        link: string;
    }

    export interface WinePairing {
        pairedWines: string[];
        pairingText: string;
        productMatches: ProductMatch[];
    }

    export interface Ingredient {
        id: number;
        name: string;
        localizedName: string;
        image: string;
    }

    export interface Equipment {
        id: number;
        name: string;
        localizedName: string;
        image: string;
    }

    export interface Length {
        number: number;
        unit: string;
    }

    export interface Step {
        number: number;
        step: string;
        ingredients: Ingredient[];
        equipment: Equipment[];
        length: Length;
    }

    export interface AnalyzedInstruction {
        name: string;
        steps: Step[];
    }

    export interface IDetailRecipe{
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
        sourceName: string;
        pricePerServing: number;
        extendedIngredients: ExtendedIngredient[];
        id: number;
        title: string;
        readyInMinutes: number;
        servings: number;
        sourceUrl: string;
        image: string;
        imageType: string;
        summary: string | any;
        cuisines: any[];
        dishTypes: string[];
        diets: any[];
        occasions: string[];
        winePairing: WinePairing;
        instructions: string | any;
        analyzedInstructions: AnalyzedInstruction[];
        originalId?: any;
        spoonacularSourceUrl: string;
    }


