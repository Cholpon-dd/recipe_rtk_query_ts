import {configureStore} from "@reduxjs/toolkit";
import {recipeApi} from "../services/recipe.api";
import {useDispatch} from "react-redux";

export const store = configureStore({
    reducer: {
        [recipeApi.reducerPath] : recipeApi.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(recipeApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>

type AppDispatch = typeof  store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()