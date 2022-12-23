import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IRecipe} from "../models/models";
import {ISearch} from "../models/search";

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
        }),
        getCountryRecipes: build.query<ISearch, string>({
            query: (country) => ({
                url: 'complexSearch',
                params: {
                    apiKey: import.meta.env.VITE_API_KEY_REACT,
                    cuisine: country,
                    number: 13
                }
            })
        }),
        getTypesRecipes: build.query<ISearch, string>({
            query: (type) => ({
                url: 'complexSearch',
                params: {
                    apiKey: import.meta.env.VITE_API_KEY_REACT,
                    type: type,
                    number: 16
                }
            })
        })
    })
})

export const { useGetRandomRecipesQuery, useGetCountryRecipesQuery,
useGetTypesRecipesQuery} = recipeApi