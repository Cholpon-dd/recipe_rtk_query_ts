import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ISearch} from "../models/search";
import {Recipe} from "../models/models";


const LS_FAV_KEY = "favourites"

interface FavouriteState {
    favourites : Recipe[]

}

const initialState: FavouriteState = {
    favourites: JSON.parse(localStorage.getItem(LS_FAV_KEY) ?? '[]')
}

export const favouriteSlice = createSlice({
    name: 'favourites',
    initialState,
    reducers: {
        addToFavourite (state, action:PayloadAction<Recipe>) {
            state.favourites.push(action.payload)
            localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites))
},
        removeFromFavourites(state, action:PayloadAction<{id: number}>){
            state.favourites = state.favourites.filter(fav => fav.id !==action.payload.id)
            localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites))
        }
    }
})

export const favouritesReducer = favouriteSlice.reducer
export const favouritesActions = favouriteSlice.actions