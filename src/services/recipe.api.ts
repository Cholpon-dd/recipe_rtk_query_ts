import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IRecipe} from "../models/models";

const BASE_URL = `https://api.spoonacular.com/recipes/`
export const recipeApi = createApi({
    reducerPath: 'recipe/api',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL
    }),
    endpoints: build => ({
        getRandomRecipes: build.query<IRecipe, number>({
            query: (number) => ({
                url: 'random',
                params: {
                    apiKey: import.meta.env.VITE_API_KEY_REACT,
                    number: number
                }
            })
        })
    })
})

export const { useGetRandomRecipesQuery } = recipeApi