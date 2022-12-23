import React from 'react';
import {useGetRandomRecipesQuery} from "../../services/recipe.api";
import ListRecipes from "./ListRecipes";
import RandomRecipesSkeleton from "./RandomRecipesSkeleton";

const RandomRecipes = () => {
    const {data, isLoading, isError} = useGetRandomRecipesQuery(12)

    return (
        <>
            <h2 className="country__title">Random recipes</h2>

        <div className="cards">
            {isLoading && <RandomRecipesSkeleton cards={12}/>}
            {isError && <p>Something went wrong</p>}
            {data?.recipes.map((recipe) => {
                return <ListRecipes key={recipe.id} data={recipe}/>
            })}
        </div>
        </>
        )
};

export default RandomRecipes;