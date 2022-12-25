import {configureStore} from "@reduxjs/toolkit";
import {recipeApi} from "../services/recipe.api";
import {useDispatch} from "react-redux";
import {favouritesReducer} from "./favouriteSlice";

export const store = configureStore({
    reducer: {
        [recipeApi.reducerPath] : recipeApi.reducer,
        favourites: favouritesReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(recipeApi.middleware)
})

export type TypeRootState = ReturnType<typeof store.getState>
